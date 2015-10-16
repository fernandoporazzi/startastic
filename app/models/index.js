'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let MovieSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  cover: {
    type: String,
    required: true,
  },
  stars: [
    {
      type: Number,
      min: 0,
      max: 5
    }
  ],
  tags: {
    type: [String]
  }
});

module.exports = mongoose.model('Movie', MovieSchema);