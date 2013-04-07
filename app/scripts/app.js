'use strict';

var dataEl = document.getElementById('suiteJson');

var suiteJson = "";
if(dataEl){
  suiteJson = JSON.parse(dataEl.innerHTML);
};

angular.module('bddSpotApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .value('suiteData', suiteJson)
;
