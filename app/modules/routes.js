(function () {

  'use strict';

  angular
  .module('hsw.routes', [
    'ngRoute'
    ])

  .config(function ($routeProvider) {    
    $routeProvider
    .when('/', {
     templateUrl: 'views/layout.html',
     controler: 'mainController'
    })
    .when('/views/signals.html', {
     templateUrl: 'views/signals.html',
     controler: 'mainController'
   });

  });
})();