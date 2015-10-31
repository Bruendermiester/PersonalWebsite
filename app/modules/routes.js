(function () {

  'use strict';

  angular
  .module('hsw.routes', [
    'ngRoute'
    ])

  .config(function ($routeProvider) {    
    $routeProvider
    .when('/', {
     templateUrl: 'mainPage/views/mainPage.html',
     controler: 'mainController'
    })
    .when('mainPage/views/resume.html', {
     templateUrl: 'views/signals.html',
     controler: 'mainController'
   });

  });
})();