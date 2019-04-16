require('dotenv').config()

let express = require('express')
let router = express.Router()
let FormData = require('form-data')

const fetch = require('isomorphic-fetch');

const FUNCTION_ENDPOINT = process.env.FUNCTION_ENDPOINT;

router.post('/send', (req, res) => {
  res.setHeader('Content-Type', 'application/json');

  let body = req.body;

  let form = "secret=" + process.env.RECAPTCHA_SECRET + "&response=" + body['reCaptcha'];

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
            if (document['status'] && document['status'] == 'error') {
                console.error("[Unsucessfull API Call] /answer - " + JSON.stringify(body) + " - " + JSON.stringify(document));
            }
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
