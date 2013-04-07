'use strict';

angular.module('bddSpotApp')
  .factory('suiteParser', function (suiteData) {
    // Service logic
    // ...


    // Public API here
    return {
      getSuite: function () {
        return suiteData;
      }
    };
  });
