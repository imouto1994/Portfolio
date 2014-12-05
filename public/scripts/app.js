'use strict';

angular
  .module('YounApp', [
    'ngAnimate',
    'ngRoute',
    'ui.bootstrap',
    'angular-inview',
    'templates-main'
  ])
  .config([ '$routeProvider', 
            '$locationProvider', 
            function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'home.html',
        controller: 'YounHomeController'
      })
      .when('/about', {
        templateUrl: 'about.html',
        controller: 'YounAboutController'
      })
      .when('/projects', {
        templateUrl: 'projects.html',
        controller: 'YounProjectsController'
      })
      .when('/contacts', {
        templateUrl: 'contacts.html',
        controller: 'YounContactsController'
      })
      .otherwise({
        redirectTo: '/home'
      });
  }]);
