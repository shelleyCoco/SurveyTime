'use strict';

/**
 * @ngdoc overview
 * @name surveyTimeApp
 * @description
 * # surveyTimeApp
 *
 * Main module of the application.
 */
$(function() {
	document.documentElement.style.fontSize = document.documentElement.clientWidth / 16 + 'px';
	window.onresize = function() {
		document.documentElement.style.fontSize = document.documentElement.clientWidth / 16 + 'px';
	}
	window.onbeforeunload=onclose;


})
function onclose() {
	alert()
	localStorage.clear()
}
angular
  .module('surveyTimeApp', ['ui.router',"chart.js",'summernote','ngSanitize'])
  .constant('url','http://47.90.20.200:1602/')
  .controller('ctrl',['$scope',function($scope){
		$scope.hintTitle = '';
		$scope.hintB = false
		$scope.hintBg = false
		
	}])
  .config(['$stateProvider','$urlRouterProvider','$httpProvider',function($stateProvider,$urlRouterProvider,$httpProvider){
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
			templateUrl:'404.html'
		}).state('graph',{
			url:'/graph/:index',
			controller:'graph',
			templateUrl:'views/graph.html'
		}).state('surveyPage',{
			url:'/surveyPage/:id',
			controller:'surveyPage',
			templateUrl:'views/surveyPage.html'
		}).state('submit',{
			url:'/submit',
			templateUrl:'views/submit.html'
		}).state('forgot',{
			url:'/forgot',
			controller:'forgot',
			templateUrl:'views/forgot.html'
		});
		$urlRouterProvider.when('','/login').otherwise('/error')
		$httpProvider.interceptors.push('timestampMarker');
	}]).controller('cdsController',['$scope','$state',function($scope,$state){
		
	}]).service('data',["$http",function($http){
		return{
			get:function(url,cbk){
				$http({
					url:url,
					method:"get",
					params:{'uid':localStorage.uid}
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
.directive('hint',function(){
	return {
		restrict:'CAME',
		template:'<div  ng-show="hintB" class="hintBox">{{hintTitle}}</div>'
	}
})
.factory('timestampMarker', ['$rootScope','$q',function($rootScope,$q) {
    var timestampMarker = {
        request: function(config) {
        		$rootScope.loading=true;
//      		window.location.href="404.html"
            config.requestTimestamp = new Date().getTime();
            return config;
        },
        response: function(response) {
        		$rootScope.loading=false;
            response.config.responseTimestamp = new Date().getTime();
            return response;
        },
        responseError: function(re){
							window.location.href="404.html";
            return $q.reject(re);
        		}
    };
    return timestampMarker;
}]);
