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
const loginRoute = require('./routes/login');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public/')));
// console.log((path.join(__dirname, '../public/')));

app.locals.hello = 'Hello world';
console.log('▶ ⇛ app.locals', app.locals);

app.use('/', mainRoute);
app.use('/log', loginRoute);
app.use('/showId', showIdRoute);
app.listen(PORT, () => { console.log('Server is up'); });
