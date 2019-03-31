from google.cloud import datastore
import json

client = datastore.Client(namespace='survey')

def create_survey(name):
  key = client.key('Survey', 1)
  entity = datastore.Entity(key=key)
  entity.update({
      'name': name,
  })
  client.put(entity)

# create_survey(u'Pilpres 2019')


def create_question(question, choice):
  key = client.key('Survey', 1, 'Question')
  entity = datastore.Entity(key=key)
  entity.update({
      'question': question,
      'choice': choice,
  })
  client.put(entity)

# create_question(u'Question here?', json.dumps([{'text': 'Answer A', 'result': 1}, {'text': 'Answer A', 'result': 2}]))


def get_questions(survey):
  ancestor = client.key('Survey', survey)
  query = client.query(kind='Question', ancestor=ancestor)
  results = list(query.fetch())

  for entity in results:
    print(entity.id)
    print(entity['question'])
    print(entity['choice'])

get_questions(1)


