'use strict';

/* App Module */

var cab4uApp = angular.module('cab4uApp', [
  'ngRoute',
  'cab4uControllers'
]);
cab4uApp.constant("rootUrl", "http://localhost:8000");

cab4uApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/login.html',
        controller: 'LoginCtrl'
      }).
      when('/home', {
        templateUrl: 'partials/home.html',
        //controller: 'HomeCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
