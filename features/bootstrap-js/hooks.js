var should = require('chai').should();

hooks = function() {
  this.Around(function(runScenario) {
    var me = this;

    this.browser = this.browser.chain().init();

    runScenario(function(callback) {
      // Now, we can do our "after scenario" stuff:

      this.browser.quit();

      // Tell Cucumber we're done:
      callback();
    });

  });

};

module.exports = hooks;
