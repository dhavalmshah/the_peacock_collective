require('dotenv').config();
const express = require('express');
const compression = require('compression');
const logger = require('morgan');
const path = require('path');
const errorHandler = require('errorhandler');
const lusca = require('lusca');
const https = require('https');
const cors = require('cors');
const lodash = require('lodash');
const _ = require('lodash');
let fs = require('fs');
const utils = require('./config/middlewares/utils');
const indexRouter = require('./controllers/index');

global._ = lodash;
const app = express();
app.use(cors('*'));
// GZIP compress resources served
app.use(compression());
app.use(logger('dev'));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json({ limit: '50mb' }));
/**
 * Start Express server.
 */
app.set('port', process.env.PORT || 2210);

const server = app.listen(app.get('port'), () => {
  console.log(
    'App is running at http://localhost:%d in %s mode',
    app.get('port'),
    app.get('env')
  );
  console.log('Press CTRL-C to stop\n');
});

app.use(lusca.xframe('SAMEORIGIN'));
app.use(lusca.xssProtection(true));
app.disable('x-powered-by');

// Static Hosting
app.use(
  '/',
  express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 })
);
app.use('/image', express.static(path.join(__dirname, 'assets')));
app.use('/apk', express.static(path.join(__dirname, 'app-apk')));
// development console log
app.use((req, res, next) => {
  if (process.env.ENVIRONMENT === 'development') {
    // console.log('req body', req.body);
    // console.log('req query', req.query);
    // console.log('authorization', req.headers.authorization);
  }
  next();
});
utils.onStartServerDataInsert();
process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
});
// Routes
// app.use(expressValidator());
app.use('/', indexRouter);

if (process.env.ENVIRONMENT === 'development') {
  app.use(errorHandler());
}
app.all('*', (req, res) => {
  return res.status(404).json({
    code: 404,
    message: 'API Not Found',
  });
});
let dir = ['./assets/images', './assets/customerImage', './assets/userImage'];

for (let i = dir.length - 1; i >= 0; i--) {
  let x = dir[i];
  if (!fs.existsSync(x)) {
    fs.mkdirSync(x, { recursive: true });
  }
}