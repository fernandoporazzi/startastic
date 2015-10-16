'use strict';

module.exports = {

  showMovies: (req, res) => {
    res.render('index', {
      title: 'Startastic'
    });
  },

  populate:(req, res) => {
    res.json({message: 'populate database'});
  }

};