'use strict';

let MovieModel = require('../models');
let fs = require('fs');
let path = require('path');
let average = require('../utils/average');

module.exports = {

  showMovies: (req, res, next) => {
    MovieModel.find((err, result) => {
      if (err) {
        return res.json({message: 'error while fetching data from database'});
      }

      for (let i = 0; i < result.length; i++) {
        let self = result[i];

        result[i].average = average.calculateAverage(self);
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
    MovieModel.findOne({_id: req.params.id}, (err, movie) => {
      if (err) {
        return res.json({message: 'error while finding movie'});
      }

      movie.stars.push(req.body.rate);

      movie.save((err, result) => {
        if (err) {
          return res.json({message: 'error while saving data'})
        }

        let avg = average.calculateAverage(result);

        return res.json({movie: result, average: avg});
      });
    });
  },

  destroyAllData: (req, res, next) => {
    MovieModel.remove({}, (err) => {
      res.json({message: 'data removed'});
    });
  }

};