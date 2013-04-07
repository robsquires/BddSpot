'use strict';

describe('Controller: MainCtrl', function () {
  var suiteData = {
    features:[
      {
        scenarios:[
          {
            steps:[{}]
          }
        ]
      }
    ]
  };

  // load the controller's module
  beforeEach(module('bddSpotApp'));

  var MainCtrl,
      scope,
      suiteParser;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    scope = {};
    suiteParser = {
      getSuite:function(){return suiteData}
    }
    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      suiteParser: suiteParser
    });
  }));

  it('should attach suite data to the scope', function () {
    expect(scope.suite).toBe(suiteData);
  });
});
