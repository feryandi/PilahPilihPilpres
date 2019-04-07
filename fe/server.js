require('dotenv').config()

const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const useragent = require('express-useragent');
// const csrf = require('csurf')

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: 'src', dev });
const handle = app.getRequestHandler();
const port = dev ? 3000 : 8080;

const session = require('./api/session');
const question = require('./api/question');
const answer = require('./api/answer');
const result = require('./api/result');

app.prepare().then(() => {
  const server = express();
  // const csrfProtection = csrf({ cookie: true });

  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(bodyParser.json());
  server.use(cookieParser())
  server.use(useragent.express());

  server.use('/api/session', session);
  server.use('/api/question', question);
  server.use('/api/answer', answer);
  server.use('/api/result', result);

  server.get('*', (req, res) => { return handle(req, res); });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
  
}).catch((ex) => {
  console.error(ex.stack);
  process.exit(1);
});
