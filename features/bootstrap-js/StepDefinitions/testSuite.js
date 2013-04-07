var should = require('chai').should(),
    as = require('async')
;

var testSuiteDefinitions = function () {
  this.World = require("../world.js").World; // overwrite default World constructor

  this.Given(/^the feature suite exists$/, function(callback) {
    var me = this;
    this.open(
      'fixtures/user_logs_in.json',
      function(err, content){
        should.not.exist(err, 'Could not open feature suite');
        me.s.suite = JSON.parse(content);
        callback();
      }
    );
  });

  this.Given(/^the feature "([^"]*)" has ([^"]*)$/, function(title, result, callback) {

    this.s.suite.features.forEach(function(feature){
      if(feature.title == title){
        feature.result = result;
      }
    });
    callback();
  });

  this.When(/^I view the report "([^"]*)"$/, function(reportTitle, callback) {
    var me = this;
    this.generateIndexPage(
      { suiteJson: JSON.stringify(this.s.suite) },
      function(err, path){
        should.not.exist(err,'Could not generate index.html');
        me
        .browser
        .get('http://localhost:9000/')
        .title(function(err, title){
          should.not.exist(err, 'Could not check report title');
          title.should.equal(reportTitle);
          callback();
        })
      }
    );
  });

  this.Then(/^I should see the ([^"]*) "([^"]*)"$/, function(suiteEl, name, callback) {
    var mapping = {
      'feature' : '.feature h2',
      'scenario' : '.scenario h3',
      'step' : '.step h4'
    };
    this
      .browser
      .elementByCss(mapping[suiteEl], function(err,element){
        should.not.exist(err, 'Could not find a '+suiteEl+' element');

        element
        .text(function(err,text){
          should.not.exist(err, 'Could not grab element text');
          text.should.equal(name);
          callback();
        });
      })
    ;
  });

  this.Then(/^I should see the ([^"]*) description:$/, function(suiteEl, desc, callback) {
    var mapping = {
      'feature' : '.feature p',
    };
    this
      .browser
      .elementByCss(mapping[suiteEl], function(err,element){
        should.not.exist(err, 'Could not find a '+suiteEl+' element');

        element
        .text(function(err,text){
          should.not.exist(err, 'Could not grab element text');
          text.should.equal(desc.replace(/(\n)/gm,''));
          callback();
        });
      })
    ;

  });

  this.Then(/^the ([^"]*) "([^"]*)" should be shown as ([^"]*)$/, function(suiteEl, title, result, callback) {
      var mapping = {
        'feature' : {
          'passed' : '.feature h2.passed'
        }
      };
      this
      .browser
      .elementsByCss(mapping[suiteEl][result], function(err,elements){
        should.not.exist(err, 'Could not find any '+suiteEl+' elements');

        elements.should.not.be.empty;

        as.each(
          elements,
          function(element, cb){
            element
            .text(function(err,text){
              should.not.exist(err, 'Could not grab element text');
              cb(text == 'rob' ? true : null);
            });
          },
          function(found){
            should.exist(found, 'Could not find '+ suiteEl +' "'+ title +'"');
            callback();
          }
        );
      })
    ;
  });
}

module.exports = testSuiteDefinitions;
