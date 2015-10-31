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
    .when('/modules/mainPage/views/resume.html', {
     templateUrl: 'modules/mainPage/views/resume.html',
     controler: 'mainController'
   });

  });
})();