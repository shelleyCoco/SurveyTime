angular.module("surveyTimeApp")
.constant("serve","http://47.90.20.200:1602")
.controller('surveyPage',['$scope','$http','serve',function($scope,$http,serve) {
   $http({
   	method:'get',
   	url:serve+'/item/',
   	params:{'uid':localStorage.uid}

   }).then(function(e){
   	console.log(e)
   	$scope.updata=e.data;
   },function(){
   	
   })
	}]);
