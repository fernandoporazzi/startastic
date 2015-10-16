'use strict';

let MovieModel = require('../models');
let fs = require('fs');
let path = require('path');

module.exports = {

  showMovies: (req, res, next) => {
    MovieModel.find((err, result) => {
      if (err) {
        return res.json({message: 'error while fetching data from database'});
      }

      for (let i = 0; i < result.length; i++) {
        let self = result[i];
        let med = self.stars.reduce((a, b) => a + b, 0) / self.stars.length;

        result[i].average = med * 2 * 10;
      }

      res.render('index', {
        title: 'Startastic',
        movies: result
      });
    });
  },

  populate: (req, res, next) => {
    let file = fs.readFileSync(path.join(__dirname, '../data/movies.json'));
    let json = JSON.parse(file);

    MovieModel.create(json.data, (err, data) => {
      if (err) {
        return res.json({message: 'error while inserting initial data'});
      }

      return res.json({response: data});
    });
  },

  update: (req, res) => {
    console.log(req.body, req.params);
    res.json({
      message: 'hello from server =)'
    });
  },

  destroyAllData: (req, res, next) => {
    MovieModel.remove({}, (err) => {
      res.json({message: 'data removed'});
    });
  }

};