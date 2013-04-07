'use strict';

describe('Service: suiteParser', function () {

  // load the service's module
  beforeEach(module('bddSpotApp'));

  var suiteData = {
    features:[
      {desc:'feature\ndescription'}
    ]
  };
  beforeEach(module(function($provide) {
    $provide.value('suiteData', suiteData);
  }));

  // instantiate service
  var suiteParser;
  beforeEach(inject(function (_suiteParser_) {
    suiteParser = _suiteParser_;
  }));

  it('it should expose suite data to the module', function () {
    expect(suiteParser.getSuite()).toBe(suiteData);
  });

});
