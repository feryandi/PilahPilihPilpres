from google.cloud import datastore
import json
import uuid
import flask
import time
import hashlib
import random

SURVEY_ID = 1

class Survey:
  def __init__(self, client, name):
    self.client = client
    self.name = name

  def create(self):
    key = self.client.key('Survey', SURVEY_ID)
    entity = datastore.Entity(key=key)
    entity.update({
        'name': self.name,
    })
    self.client.put(entity)


class Question:
  """
  Choice payload:
  [
    {
      'id': 1,
      'text': 'Neraka',
      'result': 1,
      'reason': 'text and <html/>',
      'sources': ['http://', 'http://']
    }
  ]
  """

  def __init__(self, client, question=None, choice=None, reason=None, sources=None):
    self.client = client
    self.question = question
    self.choice = choice
    self.reason = reason
    self.sources = sources

  def create(self, qnum=None):
    key = self.client.key('Survey', SURVEY_ID, 'Question', qnum)
    entity = datastore.Entity(key=key)
    entity.update({
        'question': self.question,
        'choice': self.choice,
        'reason': self.reason,
        'sources': self.sources,
    })
    self.client.put(entity)

  def get(self, qid):
    key = self.client.key('Survey', SURVEY_ID, 'Question', qid)
    result = self.client.get(key)
    if result is not None:
      self.question = result.get('question')
      self.choice = result.get('choice')
      self.reason = result.get('reason')
      self.sources = result.get('sources')
    return self

  def get_all(self, keys_only=False):
    ancestor = self.client.key('Survey', SURVEY_ID)
    query = self.client.query(kind='Question', ancestor=ancestor)

    if keys_only:
      query.keys_only()

    results = list(query.fetch())

    questions = {}
    for entity in results:
      questions[entity.id] = {
        "question": entity.get('question'),
        "choice": entity.get('choice'),
        "reason": entity.get('reason'),
        "sources": entity.get('sources')
      }

    return questions


class User:
  def __init__(self, client, fingerprint, ip=None, user_agent=None, session=None):
    self.client = client
    self.fingerprint = fingerprint
    self.user_agent = user_agent
    self.ip = ip
    self.session = session

  def create(self):
    self.session = str(uuid.uuid4())
    key = self.client.key('User', self.fingerprint)
    entity = datastore.Entity(key=key)
    entity.update({
        'fingerprint': self.fingerprint,
        'session': self.session,
    })
    self.client.put(entity)

    key = self.client.key('UserHistory', self.session)
    entity = datastore.Entity(key=key)
    entity.update({
        'fingerprint': self.fingerprint,
        'userAgent': self.user_agent,
        'session': self.session,
        'ip': self.ip
    })
    self.client.put(entity)

  def get(self):
    key = self.client.key('User', self.fingerprint)
    result = self.client.get(key)
    if result is not None:
      self.ip = result['ip']
      self.user_agent = result['userAgent']
      self.session = result['session']
    return self


class Answer:
  def __init__(self, client, user, question_id=0, answer_id=0):
    self.client = client
    self.user = user
    self.question_id = question_id
    self.answer_id = answer_id

  def create(self):
    key = self.client.key("Answer", "{}#{}#{}".format(SURVEY_ID, self.question_id, self.user.session))
    entity = datastore.Entity(key=key)
    entity.update({
        'answer': self.answer_id,
    })
    self.client.put(entity)

  def get_batch(self, questions):
    answers = {}

    for question in questions:
      key = self.client.key("Answer", "{}#{}#{}".format(SURVEY_ID, question, self.user.session))
      result = self.client.get(key)

      if result is not None:
        answers[question] = {
          "id": result.id,
          "answer": result.get('answer')
        }

    return answers

client = datastore.Client(namespace='survey')

### Functions definitions

def create_response(*args, **kwargs):
  response = flask.jsonify(*args, **kwargs)
  response.headers.set('Access-Control-Allow-Origin', '*')
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST')
  return response

def validate_request(payload, required_attributes):
  if payload is None:
    return create_response(**{
      "status": "error",
      "message": "Invalid request (err:1)"
    })

  attributes = set(payload.keys())
  
  if not set(required_attributes).issubset(attributes):
    return create_response(**{
      "status": "error",
      "message": "Invalid request (err:2)"
    })

  return None

def create_user_token(fp, se):
  return hashlib.sha256(("***REMOVED***{}-{}***REMOVED***".format(se, fp)).encode('utf-8')).hexdigest()

def get_questions_and_answers(fp, se, hide_answers=True):
  question = Question(client)
  questions = question.get_all()
  question_ids = set(questions.keys())
  question_ids_sorted = sorted(question_ids)
  response_question = {}

  # Hide the choice meaning
  for key, value in questions.items():
    q = question_ids_sorted.index(key)
    response_question[q] = {
      "id": key,
      "question": value.get("question"),
      "choice": []
    }

    if not hide_answers:
      response_question[q]['sources'] = value.get('sources')
      response_question[q]['reason'] = value.get('reason')

    # TODO: Check if array
    choices = []
    for choice in value.get("choice"):
      if hide_answers:
        choices.append({
          "id": choice.get("id"),
          "text": choice.get("text")
        })
      else:
        choices.append(choice)
      
      random.shuffle(choices)
      response_question[q]['choice'] = choices

  user = User(client, fingerprint=fp, session=se)

  answer = Answer(client, user)
  answers = answer.get_batch(questions=list(question_ids))
  answered_question_ids = set(answers.keys())
  response_answer = {}

  for key, value in answers.items():
    q = question_ids_sorted.index(key)
    response_answer[q] = {
      "qid": key,
      "answer": value.get("answer"),
      "id": value.get("id"),
    }

  unanswered_question_ids = question_ids.difference(answered_question_ids)
  last_unanswered_question_id = None

  if unanswered_question_ids: 
    last_unanswered_question_id = sorted(unanswered_question_ids)[0]
    last_unanswered_question_id = question_ids_sorted.index(last_unanswered_question_id)

  return {
    'questions': response_question,
    'answers': response_answer,
    'last_unanswered_qid': last_unanswered_question_id
  }

def get_session(request):
  """
  Payload format:
  {
    "fp": "abcdefg",
    "ua": "Mozila ...",
    "ip": "127.0.0.1"
  }
  """
  payload = request.get_json()

  validation = validate_request(payload, ['fp', 'ip', 'ua'])
  if validation is not None:
    return validation

  user = User(client, fingerprint=payload['fp'], ip=payload['ip'], user_agent=payload['ua'])
  user.create()

  response = {
    "status": "ok",
    "session": user.session,
    "token": create_user_token(user.fingerprint, user.session)
  }

  return create_response(**response)


def get_questionnaire(request):
  """
  {
    "fp": "abcdefg",
    "se": "aa-aa-aa"
    "to": "sha256"
  }
  """
  # payload = request.get_json()
  payload = {
    "fp": "abcdefg",
    "se": "f836c833-9bdc-4cd4-9a8d-37218ec0b634",
    "to": "5d326faba2da05ec2a8f12ad20ff3e3219f6114e3a7d8b080c62135d77062da9"
  }

  validation = validate_request(payload, ['fp', 'se', 'to'])
  if validation is not None:
    return validation

  response = {}

  token = create_user_token(payload['fp'], payload['se'])

  if token != payload['to']:
    return create_response(**{
      "status": "error",
      "message": "Invalid request (err:3)"
    })

  qna = get_questions_and_answers(payload['fp'], payload['se'], True)

  response['questions'] = qna['questions']
  response['answers'] = qna['answers']
  response['last_unanswered'] = qna['last_unanswered_qid']
  response['status'] = 'ok'

  return create_response(**response)


def get_result(request):
  """
  {
    "fp": "abcdefg",
    "se": "aa-aa-aa",
    "to": "sha"
  }
  """
  payload = request.get_json()

  validation = validate_request(payload, ['fp', 'se', 'to'])
  if validation is not None:
    return validation

  response = {}

  token = create_user_token(payload['fp'], payload['se'])

  if token != payload['to']:
    return create_response(**{
      "status": "error",
      "message": "Invalid request (err:3)"
    })

  qna = get_questions_and_answers(payload['fp'], payload['se'], False)

  result = {}

  for key, value in qna['questions'].items():
    choices = value.get('choice', [])
    selected_answer = qna['answers'].get(key, {}).get('answer', -1)

    for choice in choices:
      parties = choice.get('result', [])
      for party in parties:
        p = str(party)
        if int(choice.get('id', -1)) == int(selected_answer):
          if p in result:
            result[p] += 1
          else:
            result[p] = 1
        else:
          if p not in result:
            result[p] = 0

  score_map = {}
  score_order = []

  for key, value in result.items():
    if value in score_map:
      score_map[value].append(key)
    else:
      score_map[value] = [key]
      score_order.append(value)

  score_order.sort(reverse=True)

  response['status'] = 'ok'
  response['stance'] = result
  response['result'] = {
    'map': score_map,
    'order': score_order
  }
  response['questions'] = qna['questions']
  response['answers'] = qna['answers']

  return create_response(**response)


def post_answer(request):
  """
  {
    "fp": "abcdefg",
    "se": "aa-aa-aa",
    "to": "sha",
    "answers": {
      "1": {
        "qid": 123,
        "answer": 1
      }, ...
    }
  }
  """
  payload = request.get_json()

  validation = validate_request(payload, ['fp', 'se', 'to', 'answers'])
  if validation is not None:
    return validation

  token = create_user_token(payload['fp'], payload['se'])

  if token != payload['to']:
    return create_response(**{
      "status": "error",
      "message": "Invalid request (err:3)"
    })

  user = User(client, fingerprint=payload['fp'], session=payload['se'])

  answers = payload['answers']

  for key, value in answers.items():
    question = Question(client)
    question.get(qid=int(value.get('qid')))

    if question.question is None:
      return create_response(**{
        "status": "error",
        "message": "Invalid request (err:5)"
      })

    answer = Answer(client, user, value.get('qid'), value.get('answer'))
    answer.create()

  return create_response(**{"status": "ok"})
