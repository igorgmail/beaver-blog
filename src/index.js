require('@babel/register');
require('dotenv').config();
const express = require('express');
const bcrypt = require('bcrypt');

const path = require('path');

const app = express();
const logger = require('morgan');
// cookies
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const PORT = process.env.PORT ?? 3001;

// const Layout = require('./views/Layout');

const mainRoute = require('./routes/mainRote');
const showIdRoute = require('./routes/showIdRoute');
const authRoute = require('./routes/auth');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public/')));
app.use(session({
  store: new FileStore(),
  secret: process.env.SECRET || 'privet bobri',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }, // * secure: false настройка для отключения передачи кук только по https
}));

app.locals.agge = '28';
app.locals.user = 'User';

app.use('/', mainRoute);
app.use('/auth', authRoute);
app.use('/showId', showIdRoute);
app.listen(PORT, () => { console.log('Server is up'); });
