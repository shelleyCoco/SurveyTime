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
  	
  	$scope.json2=[{
  		"option":[
	  		{
	  			"title":"你每天学习几个小时？",
	  			"opt":[],
	  			"type":2,
	  			"oop":"我每天学习8小时"
	  		},
	  		{
	  			"title":"你每天睡觉几小时",
	  			"opt":[
		  			{
		  				"op":"8小时",
		  				"num":1
		  			},
			  		{
			  			"op":"9小时",
			  			"num":1
			  		}
		  		],
		  		"type":0,
		  		"oop":""
	  		},
	  		{
	  			"title":"你每天吃饭用多久",
	  			"opt":[
	  			{
	  				"op":"1小时",
	  				"num":1
	  			},
	  			{
	  				"op":"2小时",
	  				"num":1
	  			}],
	  			"type":0,
	  			"oop":""
	  		}
  		],
  		"uid":"56aa508e239548c2",
  		"title":"你热爱学习吗",
  		"id":"6c4087e8acf439b7"
  	},{
  		"option":[
	  		{
	  			"title":"你每天学习几个小时？",
	  			"opt":[],
	  			"type":2,
	  			"oop":"我每天学习8小时"
	  		},
	  		{
	  			"title":"你每天睡觉几小时",
	  			"opt":[
		  			{
		  				"op":"8小时",
		  				"num":1
		  			},
			  		{
			  			"op":"9小时",
			  			"num":1
			  		}
		  		],
		  		"type":0,
		  		"oop":""
	  		},
	  		{
	  			"title":"你每天吃饭用多久",
	  			"opt":[
	  			{
	  				"op":"1小时",
	  				"num":1
	  			},
	  			{
	  				"op":"2小时",
	  				"num":1
	  			}],
	  			"type":0,
	  			"oop":""
	  		}
  		],
  		"uid":"56aa508e239548c2",
  		"title":"你热爱学习吗",
  		"id":"6c4087e8acf439b7"
  	}]
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
