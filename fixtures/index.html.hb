<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
  <head>
    <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <title>Secure Login System - Behaviour Report</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width">
    <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
    <link rel="stylesheet" href="styles/main.css">

  </head>
  <body ng-app="bddSpotApp">
    <script type="application/json" id="suiteJson">{{{suiteJson}}}</script>
    <!--[if lt IE 7]>
      <p class="chromeframe">You are using an outdated browser. <a href="http://browsehappy.com/">Upgrade your browser today</a> or <a href="http://www.google.com/chromeframe/?redirect=true">install Google Chrome Frame</a> to better experience this site.</p>
    <![endif]-->

    <!--[if lt IE 9]>
      <script src="components/es5-shim/es5-shim.js"></script>
      <script src="components/json3/lib/json3.min.js"></script>
    <![endif]-->

    <!-- Add your site or application content here -->
    <div class="container" ng-view></div>

    <script src="components/angular/angular.js"></script>
    <script src="components/angular-resource/angular-resource.js"></script>
    <script src="components/angular-resource/angular-sanitize.js"></script>

    <!-- build:js scripts/scripts.js -->
    <script src="scripts/app.js"></script>
    <script src="scripts/controllers/main.js"></script>
    <script src="scripts/services/suiteParser.js"></script>
    <script src="scripts/filters/split.js"></script>
    <!-- endbuild -->


    <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
    <script>
      var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
      (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
      g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
      s.parentNode.insertBefore(g,s)}(document,'script'));
    </script>
  </body>
</html>
