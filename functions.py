from google.cloud import datastore
import json
import uuid

class Survey:
  key = 2

  def __init__(self, client, name):
    self.client = client
    self.name = name

  def create(self):
    key = self.client.key('Survey', self.key)
    entity = datastore.Entity(key=key)
    entity.update({
        'name': self.name,
    })
    self.client.put(entity)


class Question:
  def __init__(self, client, question, choice):
    self.client = client
    self.question = question
    self.choice = choice

  def create(self):
    key = self.client.key('Survey', Survey.key, 'Question')
    entity = datastore.Entity(key=key)
    entity.update({
        'question': self.question,
        'choice': self.choice,
    })
    self.client.put(entity)

  def get(self):
    ancestor = self.client.key('Survey', Survey.key)
    query = self.client.query(kind='Question', ancestor=ancestor)
    results = list(query.fetch())

    for entity in results:
      print(entity.id)
      print(entity['question'])
      print(entity['choice'])


class User:
  def __init__(self, client, fingerprint):
    self.client = client
    self.fingerprint = fingerprint
    self.session = str(uuid.uuid4())

  def create(self):
    key = self.client.key('User', self.fingerprint)
    entity = datastore.Entity(key=key)
    entity.update({
        'fingerprint': self.fingerprint,
        'session': self.session,
    })
    self.client.put(entity)

  def get(self):
    key = self.client.key('User', self.fingerprint)
    result = self.client.get(key)
    print(result)
    self.session = result['session']


def Answer:
  def __init__(self, client, user, question, answer):
    self.client = client
    self.user = user
    self.question = question
    self.answer = answer

  def create(self):
    key = self.client.key('User', self.user, 'Answer')
    entity = datastore.Entity(key=key)
    entity.update({
        'question': self.question,
        'answer': self.answer,
    })
    self.client.put(entity)


client = datastore.Client(namespace='survey')

user = User(client, 'abcdef')
# user.create()
user.get()

# survey = Survey(client, 'Pilpres Test')
# survey.create()

# question = Question(client, 'Question something?', json.dumps([{'text': 'Heya', 'result': -1}]))
# question.create()
# question.create()
# question.create()

# question.get()
