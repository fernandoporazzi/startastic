'use strict';

const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/startastic';

mongoose.connect(uri);

mongoose.connection.on('connected', () => {
  console.log('Mongoose default connection open to ' + uri);
});

mongoose.connection.on('error', err => {
  console.log('Mongoose default connection error: ' + err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose default connection disconnected');
});

mongoose.connection.once('open', () => {
  console.log('Mongoose default connection is open');
});

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});