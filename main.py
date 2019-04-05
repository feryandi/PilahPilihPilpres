from google.cloud import datastore
import json
import uuid
import flask
import time
import hashlib

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

  def __init__(self, client, question=None, choice=None):
    self.client = client
    self.question = question
    self.choice = choice

  def create(self):
    key = self.client.key('Survey', SURVEY_ID, 'Question')
    entity = datastore.Entity(key=key)
    entity.update({
        'question': self.question,
        'choice': self.choice,
    })
    self.client.put(entity)

  def get(self, qid):
    key = self.client.key('Survey', SURVEY_ID, 'Question', qid)
    result = self.client.get(key)
    if result is not None:
      self.question = result.get('question')
      self.choice = result.get('choice')
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
        "choice": entity.get('choice')
      }

    print(questions)
    return questions


class User:
  def __init__(self, client, fingerprint, ip=None, user_agent=None, session=None):
    self.client = client
    self.fingerprint = fingerprint
    self.user_agent = user_agent
    self.ip = ip
    self.session = session

  def create(self):
    self.get()

    if self.session is None:
      self.session = str(uuid.uuid4())
      key = self.client.key('User', self.fingerprint)
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

    print(answers)
    return answers


client = datastore.Client(namespace='survey')

fp = 'abcdefg'

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
  
  if set(required_attributes) != attributes:
    return create_response(**{
      "status": "error",
      "message": "Invalid request (err:2)"
    })

  return None

def create_user_token(fp, se):
  return hashlib.sha256(("***REMOVED***{}-{}***REMOVED***".format(se, fp)).encode('utf-8')).hexdigest()

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

  question = Question(client)
  questions = question.get_all()
  question_ids = set(questions.keys())
  question_ids_sorted = sorted(question_ids)
  response['questions'] = {}

  # Hide the choice meaning
  for key, value in questions.items():
    q = question_ids_sorted.index(key)
    response['questions'][q] = {
      "id": key,
      "question": value.get("question"),
      "choice": []
    }
    # TODO: Check if array
    for choice in value.get("choice"):
      response['questions'][q]['choice'].append({
        "id": choice.get("id"),
        "text": choice.get("text")
      })

  user = User(client, fingerprint=payload['fp'], session=payload['se'])

  answer = Answer(client, user)
  answers = answer.get_batch(questions=list(question_ids))
  answered_question_ids = set(answers.keys())
  response['answers'] = {}

  for key, value in answers.items():
    q = question_ids_sorted.index(key)
    response['answers'][q] = {
      "qid": key,
      "answer": value.get("answer"),
      "id": value.get("id"),
    }

  unanswered_question_ids = question_ids.difference(answered_question_ids)
  last_unanswered_question_id = None

  if unanswered_question_ids: 
    last_unanswered_question_id = sorted(unanswered_question_ids)[0]
    last_unanswered_question_id = question_ids_sorted.index(last_unanswered_question_id)

  response['last_unanswered'] = last_unanswered_question_id
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

  question = Question(client)
  questions = question.get_all()
  question_ids = set(questions.keys())

  user = User(client, fingerprint=payload['fp'], session=payload['se'])

  answer = Answer(client, user)
  answers = answer.get_batch(questions=list(question_ids))

  if question_ids != set(answers.keys()):
    return create_response(**{
      "status": "error",
      "message": "Invalid request (err:6)"
    })

  result = {}

  for question_id, value in questions.items():
    answer_id = answers.get(question_id, {}).get('answer', -1)
    choices = value.get('choice', [])

    for choice in choices:
      if int(choice.get('id', -1)) == int(answer_id):
        party = str(choice.get('result', -1))
        if party in result:
          result[party] += 1
        else:
          result[party] = 1

  response['status'] = 'ok'
  response['stance'] = result
  response['questions'] = questions

  print(response)

  return create_response(**response)


def post_answer(request):
  """
  {
    "fp": "abcdefg",
    "se": "aa-aa-aa",
    "to": "sha",
    "qid": 12345,
    "aid": 1
  }
  """
  payload = request.get_json()

  validation = validate_request(payload, ['fp', 'se', 'to', 'qid', 'aid'])
  if validation is not None:
    return validation

  token = create_user_token(payload['fp'], payload['se'])

  if token != payload['to']:
    return create_response(**{
      "status": "error",
      "message": "Invalid request (err:3)"
    })

  user = User(client, fingerprint=payload['fp'], session=payload['se'])

  question = Question(client)
  question.get(qid=payload['qid'])

  if question.question is None:
    return create_response(**{
      "status": "error",
      "message": "Invalid request (err:5)"
    })

  correct_aid = False
  for choice in question.choice:
    if payload['aid'] == int(choice.get('aid', -1)):
      correct_aid = True

  if not correct_aid:
    return create_response(**{
      "status": "error",
      "message": "Invalid request (err:7)"
    })

  answer = Answer(client, user, payload['qid'], payload['aid'])
  answer.create()

  return create_response(**{"status": "ok"})


# user = User(client, fingerprint=fp)
# user.get()

# question = Question(client)
# questions = question.get()
# question_ids = set(questions.keys())

# answer = Answer(client, user)
# answers = answer.get_batch(questions=list(question_ids))

# answer = Answer(client, user, 5633226290757632, 1)
# answer.create()

# survey = Survey(client, 'Pilpres Test')
# survey.create()

# choice = [
#   {
#     'id': 1,
#     'text': 'Pantai',
#     'result': 1,
#     'reason': 'text and <html/>',
#     'sources': ['http://', 'http://']
#   },
#   {
#     'id': 2,
#     'text': 'Gunung',
#     'result': 2,
#     'reason': 'text and <html/>',
#     'sources': ['http://', 'http://']
#   },
#   {
#     'id': 3,
#     'text': 'Neraka',
#     'result': 0,
#     'reason': 'text and <html/>',
#     'sources': ['http://', 'http://']
#   }
# ]

# question = Question(client, 'Kemana Anda ingin pergi berlibur?', choice)
# question.create()

# questions = question.get()
