'use strict';

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

require('./config/mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'jade');

app.use(express.static('./app/public'));

require('./app/routes')(app);

module.exports = app;