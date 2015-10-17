'use strict';

module.exports = {

  calculateAverage: (obj) => {
    let med = obj.stars.reduce((a, b) => a + b, 0) / obj.stars.length;

    return med * 2 * 10;
  }

};