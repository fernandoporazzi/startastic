'use strict';

module.exports = {

  showMovies: (req, res) => {
    res.render('index', {
      title: 'Startastic'
    });
  }

};