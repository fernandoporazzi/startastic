;(function(){

  'use strict';

  var Startastic = (function(){

    var exports = exports || {};

    var _xhr = new XMLHttpRequest();

    var _updateProgressBar = function(item, average) {
      var query = 'p-bar-' + item,
        progressBar =  document.querySelector('[data-js="' + query + '"]');

      progressBar.style.width = average + '%';
    };

    var _vote = function(el) {
      var rate = el.getAttribute('data-rate'),
        item = el.getAttribute('data-item');

      _xhr.open('PUT', '/movie/' + item, true);
      _xhr.onload = function() {
        if (_xhr.status === 200 && _xhr.readyState === 4) {
          var data = JSON.parse(_xhr.responseText);

          _updateProgressBar(item, data.average);
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
