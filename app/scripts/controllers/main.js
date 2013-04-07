'use strict';

angular.module('bddSpotApp')
  .controller('MainCtrl', function ($scope, suiteParser) {
    $scope.suite = suiteParser.getSuite();
  });
