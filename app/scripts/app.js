'use strict';

/**
 * @ngdoc overview
 * @name surveyTimeApp
 * @description
 * # surveyTimeApp
 *
 * Main module of the application.
 */
window.onload = function(){
	document.documentElement.style.fontSize  = innerWidth/16 + 'px';
	window.onresize = function(){
		document.documentElement.style.fontSize  = innerWidth/16 + 'px';
	}
}

angular
  .module('surveyTimeApp', ['ui.router'])
  .constant('url','http://47.90.20.200:1602/users')
  .controller('ctrl',['$scope',function($scope){
	  
	}]).config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
		$stateProvider.state('cds',{
			url:'/cds',
			controller:'cdsController',
			templateUrl:'views/main.html'
		}).state('login',{
			url:'/login',
			controller:'login',
			templateUrl:'views/login.html'
		});
		$urlRouterProvider.otherwise('/login')
	}]).controller('cdsController',['$scope',function($scope){
		
	}])
