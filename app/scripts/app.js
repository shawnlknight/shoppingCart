'use strict';

angular
  .module('shoppingCart', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/newPage', {
        templateUrl: 'views/about.html',
        controller: 'MainCtrl'
      })
      .when('/inventory', {
        templateUrl: 'views/inventory/list.html',
        controller: 'ProductCtrl'
      })
      .when('/inventory/:id', {
        templateUrl: 'views/inventory/show.html',
        controller: 'EditProductCtrl'
      })
      .when('/new', {
        templateUrl: 'views/inventory/create.html',
        controller: 'ProductCtrl'
      })
      .when('/inventory/:id/edit', {
        templateUrl: 'views/inventory/edit.html',
        controller: 'EditProductCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
