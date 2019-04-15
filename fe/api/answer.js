require('dotenv').config()

let express = require('express')
let router = express.Router()
let FormData = require('form-data')

const fetch = require('isomorphic-fetch');

const FUNCTION_ENDPOINT = '***REMOVED***';

router.post('/send', (req, res) => {
  res.setHeader('Content-Type', 'application/json');

  let body = req.body;

  let form = "secret=***REMOVED***&response=" + body['reCaptcha'];

  fetch(`https://www.google.com/recaptcha/api/siteverify`, {
    method: 'POST',
    body: form,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8' }
  })
  .then((response) => {
    return response.json().then((document) => {
        if (!document['success']) {
            res.status(403).send({ errors: [ { code: "Server Protection", title: "ReCaptcha token couldn't be verified." } ] })
            return;
        }
        
        fetch(`${FUNCTION_ENDPOINT}/survey-post-answer`, {
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
            res.status(code).send(JSON.stringify(document));
            return;
        })
        .catch(() => {
            res.status(500).send({ errors: [ { code: "Outage", title: "Cannot communicate with the backend." } ] });
            return;
        });
    })
  })

});

module.exports = router;
