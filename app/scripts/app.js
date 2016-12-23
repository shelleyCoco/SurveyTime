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
	  
	}])
  .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
		$stateProvider.state('cds',{
			url:'/cds',
			controller:'cdsController',
			templateUrl:'views/main.html'
		}).state('login',{
			url:'/login',
			controller:'login',
			templateUrl:'views/login.html'
		}).state('register',{
			url:'/register',
			controller:'register',
			templateUrl:'views/register.html'
		}).state('create',{
			url:'/create',
			controller:'create',
			templateUrl:'views/create.html'
		}).state('error',{
			url:'/error',
			controller:'error',
			templateUrl:'404.html'
		});
		$urlRouterProvider.otherwise('/login')
	}]).controller('cdsController',['$scope',function($scope){
		$urlRouterProvider.when('','login').otherwise('error')
	}]).controller('cdsController',['$scope','$state',function($scope,$state){
	}]).service('data',["$http",function($http){
		return{
			get:function(url,cbk){
				$http({
					url:url,
					method:"get",
//					params:{"$skip":0,"$limit":10}
				}).then(function(e){
					cbk(e)
				},function(){
	
				})
			},
			post:function(url,data,cbk){
				$http({
					url:url,
					method:"post",
					data:data
				}).then(function(e){
					cbk(e)
				},function(){
					
				})
			}
		}
		
	}])
	
