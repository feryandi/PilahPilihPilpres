require('dotenv').config()

let express = require('express')
let router = express.Router()

const fetch = require('isomorphic-fetch');

const FUNCTION_ENDPOINT = process.env.FUNCTION_ENDPOINT;

router.post('/generate', (req, res) => {
  res.setHeader('Content-Type', 'application/json');

  let body = req.body;
  body['ua'] = req.headers['user-agent'];
  body['ip'] = req.headers['x-forwarded-for'] || req.connection.remoteAddress

  if (!(typeof body['fp'] === 'string' || body['fp'] instanceof String) || !(/[a-fA-F0-9]{32}/).test(body['fp'])) {
    res.status(500).send({ errors: [ { code: "Outage", title: "You broke it. Congratulations!" } ] });
    return;
  }

  fetch(`${FUNCTION_ENDPOINT}/survey-get-session`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' }
  })
  .then((response) => {
    return response.json().then((document) => {
      return ({ code: response.status, document })
    })
  })
  .then((response) => {
    let {code, document} = response;
    if (document['status'] && document['status'] == 'error') {
        console.error("[Unsucessfull API Call] /session - " + JSON.stringify(body) + " - " + JSON.stringify(document));
    }
    res.status(code).send(JSON.stringify(document));
    return;
  })
  .catch(() => {
    res.status(500).send({ errors: [ { code: "Outage", title: "Cannot communicate with the backend." } ] });
    return;
  });
});

module.exports = router;
