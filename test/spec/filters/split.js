'use strict';

describe('Filter: splitNewline', function () {

  // load the filter's module
  beforeEach(module('bddSpotApp'));

  // initialize a new instance of the filter before each test
  var split;
  beforeEach(inject(function ($filter) {
    split = $filter('split');
  }));

  describe('it should split a string into an array', function(){

    it('should split by \\n by default', function () {
      expect(split('line 1\nline 2'))
        .toEqual(['line 1', 'line 2'])
      ;
    });

    it('should split by any delimiter', function () {
      expect(split('line 1,line 2', ','))
        .toEqual(['line 1', 'line 2'])
      ;
    });
  });
});
