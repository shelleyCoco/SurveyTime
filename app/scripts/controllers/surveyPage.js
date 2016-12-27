angular.module("surveyTimeApp")
.constant("serve","http://47.90.20.200:1602")
.controller('surveyPage',['$scope','$http','serve','$stateParams',function($scope,$http,serve,$stateParams){
   var id=$stateParams.id;
   $scope.updata={};
   $scope.wcledata0=[];
   $scope.wcledata1=[];
   $scope.wcledata2=[];
   $scope.wcledata3=[];
   $http({
   	method:'get',
   	url:serve+'/item/'+id,
   	params:{'uid':localStorage.uid}

   }).then(function(e){
   	$scope.updata=e.data;
      console.log($scope.updata)
      for(var i=0;i<$scope.updata.option.length;i++){
         if($scope.updata.option[i].type==0){
            $scope.wcledata0.push($scope.updata.option[i])
         }else if($scope.updata.option[i].type==1){
            $scope.updata.option[i].token='asd'+i;
            
            $scope.wcledata1.push($scope.updata.option[i])

         }else if($scope.updata.option[i].type==2){
            $scope.wcledata2.push($scope.updata.option[i])
         }else{
            $scope.wcledata3.push($scope.updata.option[i])
         }

      }
      console.log($scope.wcledata1)
   },function(){})
   $scope.Fn=function(){
     
   }
	}])
