'use strict';

/* Services */

var AuthenticationService = angular.module('AuthenticationService', []);

AuthenticationService.factory('login', ["$http", '$q', '$window','rootUrl', function($http, $q, $window, rootUrl){
	var makeLogin = function() {

		console.log("reached in makeLogin");
		console.log("rootUrl: ", rootUrl);
	};
    var googleSignIn = function () {
        var defered = $q.defer();
        $window.signinCallback = function (response) {
        	if(response["access_token"]){
        		$window.location.href = '#/home'
        		$window.signinCallback = undefined;
            	defered.resolve(response);
        	}
            
        };

        gapi.auth.signIn({
            clientid: "478792686719-dbsdcf3322ac7vs15nvgph0vm54sdhts.apps.googleusercontent.com",
            cookiepolicy: "single_host_origin",
            requestvisibleactions: "http://schemas.google.com/AddActivity",
            scope: "https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/plus.profile.emails.read",
            callback: "signinCallback"

        }) 
        return defered.promise;
    };
    var googleSignOut = function(){
    	console.log("inside service googleSignOut")
    	var defered = $q.defer();
    	$window.signoutCallback = function(response){
    		console.log("reached in callback");
    		console.log("reached here");
    		console.log(response);
    		$window.location.href = '#/'
    	}
    	gapi.auth.signOut({
    		callback: "signoutCallback"
    	});
    	return defered.promise;
    }
	return {
		makeLogin: makeLogin,
		googleSignIn: googleSignIn,
		googleSignOut: googleSignOut
	}


}]);



