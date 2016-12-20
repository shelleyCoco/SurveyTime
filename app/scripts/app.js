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
  .module('surveyTimeApp', ['ui.router']).controller('ctrl',['$scope',function($scope){
	  
	}]).config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
		$stateProvider.state('cds',{
			url:'/cds',
			controller:'cdsController',
			templateUrl:'views/main.html'
		});
		$urlRouterProvider.otherwise('/cds')
	}]).controller('cdsController',['$scope',function($scope){
		
	}]);
