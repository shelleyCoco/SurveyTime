'use strict';

/**
 * @ngdoc function
 * @name surveyTimeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the surveyTimeApp
 */

angular.module('surveyTimeApp')
  .controller('cdsController', ['$scope','$http','$state',function ($scope,$http,$state){
  	
  	$scope.json=[];
  	var url='http://47.90.20.200:1602';
    $http({
    	url:url+'/item/',
  		method:'get',
  		params:{'uid':localStorage.uid}
    }).then(function(e){
		console.log(e)
		$scope.json=e.data
    },function(e){
    	
    });
    $scope.cdstc=function(){
    	
    	$state.go('login')
    }
    $scope.cdsxinzeng=function(){
    	$state.go('create')
    }
    $scope.delete=function(index){
    	console.log($scope.json[index].id)
    	var id=$scope.json[index].id
    	$http({
    		url:url+'/item/'+id,
    		method:'delete',

    	}).then(function(e){
    		console.log(e)
    		$scope.json.splice(index,1)
    	},function(){})
    }
  }]);












