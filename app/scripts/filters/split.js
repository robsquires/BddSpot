'use strict';

angular.module('bddSpotApp')
  .filter('split', function () {
    return function (string, delimiter) {
      delimiter = delimiter == undefined ? '\n' : delimiter;

      return string.split(delimiter);
    };
  });
