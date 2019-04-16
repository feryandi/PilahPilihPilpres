require('dotenv').config()

let express = require('express')
let router = express.Router()
let FormData = require('form-data')

const fetch = require('isomorphic-fetch');

const FUNCTION_ENDPOINT = '***REMOVED***';

router.post('/get', (req, res) => {
    res.setHeader('Content-Type', 'application/json');

    let body = req.body;

    fetch(`${FUNCTION_ENDPOINT}/survey-get-result`, {
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
            console.error("[Unsucessfull API Call] /result - " + JSON.stringify(body) + " - " + JSON.stringify(document));
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
