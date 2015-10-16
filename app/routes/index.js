'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers');

module.exports = (app) => {

  router
    .get('/', controller.showMovies)
    .get('/populate', controller.populate);

  app.use(router);

};