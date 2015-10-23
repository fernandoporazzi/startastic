'use strict';

let path = require('path');
let express = require('express');
let bodyParser = require('body-parser');
let serveStatic = require('serve-static');
let app = express();

require('./config/mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'jade');

app.use(serveStatic('./app/public'));

require('./app/routes')(app);

module.exports = app;