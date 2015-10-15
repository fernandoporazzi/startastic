'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers');

module.exports = (app) => {

  router
    .get('/', controller.showMovies);

  app.use(router);

};