;(function(){

  'use strict';

  var Startastic = (function(){

    var exports = exports || {};

    var _xhr = new XMLHttpRequest();

    var _vote = function(el) {
      var rate = el.getAttribute('data-rate'),
        item = el.getAttribute('data-item');

      _xhr.open('PUT', '/movie/' + item, true);
      _xhr.onload = function() {
        if (_xhr.status === 200 && _xhr.readyState === 4) {
          console.log(_xhr.responseText);
        }
      };
      _xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      _xhr.send('rate=' + rate);
    };

    var _bindVoting = function() {
      var buttons = document.querySelectorAll('[data-js="vote-button"]'),
        i = 0,
        l = buttons.length;

      for (i; i < l; i++) {
        var self = buttons[i];

        self.addEventListener('click', function(e) {
          e.preventDefault();

          _vote(this);
        }, false);
      }
    };

    exports.init = function() {
      _bindVoting()
    };

    return exports;

  })();

  Startastic.init();

})();
