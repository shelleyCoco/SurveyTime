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
  	$scope.isshow=true;
  	$scope.cdschulai=false;
  	$scope.json=[];
  	var url='http://47.90.20.200:1602';
    $scope.gg=function(){
    	$http({
	    	url:url+'/item/',
	  		method:'get',
	  		params:{'uid':localStorage.uid}
	    }).then(function(e){
			console.log(e)

			$scope.json=e.data;
			for(var i=0;i<$scope.json.length;i++){
				$scope.json[i].checked=false;
			}
	    },function(e){
	    	
	    });
    }
    $scope.gg();
    $scope.cdstc=function(){
    	
    	$state.go('login')
    }
    $scope.cdsxinzeng=function(){
    	$state.go('create')
    }
    $scope.delete=function(index){
//  	console.log($scope.json[index].id)
    	var id=$scope.json[index].id
    	$http({
    		url:url+'/item/'+id,
    		method:'delete',

    	}).then(function(e){
//  		console.log(e)
    		$scope.json.splice(index,1)
    	},function(){})
    };
    
    $scope.cdsAll=function(){
    	$scope.isshow=!$scope.isshow;
    	$scope.cdschulai=true;

    };
    $scope.cdsDel=function(){
    	$scope.isshow=!$scope.isshow;
		for(var i=0;i<$scope.json.length;i++){
    		if($scope.json[i].checked==true){
				var id=$scope.json[i].id
		    	$http({
		    		url:url+'/item/'+id,
		    		method:'delete',

		    	}).then(function(e){
//		    		console.log(e)
		    		$scope.gg();
		    	},function(){})
    		}
		}
		
    	$scope.cdschulai=false;
    }
  }]);












