'use strict';

/* Controllers */

var cab4uControllers = angular.module('cab4uControllers', ['AuthenticationService']);

cab4uControllers.controller('LoginCtrl', ['$scope', 'login',
  function($scope, login, googleSignIn, googleSignOut ) {

    $scope.login = function(){
    	console.log("reached here")
    	var username = $scope.username;
    	var password = $scope.password;
    	login.makeLogin(username, password);
    
  }
  $scope.googleSignIn = function() {
  	console.log("reached google signIn");
  	login.googleSignIn()
  }
  $scope.googleSignOut = function() {
  	console.log("reached google signOut");
  	login.googleSignOut()
  }
  }]);
