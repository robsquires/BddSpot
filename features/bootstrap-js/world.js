var fs           = require("fs"),
    hb           = require('handlebars'),
    wd  = require('wd')
;

var World = function World(callback) {

  this.browser = wd.remote({
    host: '127.0.0.1',
    port: 8910
  });

  this.browser.on('status', function(info){
    console.log('\x1b[36m%s\x1b[0m', info);
  });

  this.browser.on('command', function(meth, path, data){
    console.log(' > \x1b[33m%s\x1b[0m: %s', meth, path, data || '');
  });

  this.s = {};

  this.open = function(path, cb){
    fs.readFile(path, 'utf8', cb);
  }

  var indexPageTpl =  hb.compile(
    fs.readFileSync('fixtures/index.html.hb', 'utf8')
  );

  this.generateIndexPage = function(data, cb){
    var path = fs.realpathSync(__dirname + '/../../app/index.html');
    fs.writeFile(
      path,
      indexPageTpl(data),
      function(err){
        if(err) return cb(err);

        return cb(null, path);
      }
    );
  }

  callback(); // tell Cucumber we're finished and to use 'this' as the world instance
};
exports.World = World;
