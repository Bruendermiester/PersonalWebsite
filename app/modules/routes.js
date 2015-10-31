(function () {

  'use strict';

  angular
  .module('myRoutes', [
    'ngRoute'
    ])

  .config(function ($routeProvider) {    
    $routeProvider
    .when('/', {
     templateUrl: 'modules/mainPage/views/mainPage.html',
     controler: 'mainController'
    })
    .when('views/resume.html', {
     templateUrl: 'modules/mainPage/views/signals.html',
     controler: 'mainController'
   });

  });
})();