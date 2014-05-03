var webTech = angular.module("webTech", ['ngResource','ngRoute', 'ngAnimate','ui.bootstrap']);

webTech.config(['$routeProvider', function($routeProvider) {
'use strict';
	$routeProvider. when('/',{controller:'HomePageController', templateUrl:'html/homePage.html'}).
				   otherwise({redirectTo:"/"});

}]);