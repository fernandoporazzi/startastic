'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers');

module.exports = (app) => {

  router
    .get('/', controller.showMovies)
    .get('/populate', controller.populate)
    .put('/movie/:id', controller.update)
    .delete('/delete', controller.destroyAllData);

  app.use(router);

};