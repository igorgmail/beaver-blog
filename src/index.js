require('@babel/register');
require('dotenv').config();
const express = require('express');

const path = require('path');

const app = express();
const logger = require('morgan');

const PORT = process.env.PORT ?? 4041;

const Layout = require('./views/Layout');

const mainRoute = require('./routes/mainRote');
const showIdRoute = require('./routes/showIdRoute');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public/')));
console.log((path.join(__dirname, '../public/')));

app.locals.hello = 'Hello world';

app.use('/', mainRoute);
app.use('/showId', showIdRoute);
app.listen(PORT, () => { console.log('Server is up'); });
