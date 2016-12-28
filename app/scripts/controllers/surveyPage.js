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
            for(var i=0;i<$scope.wcledata1.length;i++){
               $scope.wcledata1[i].check=-1;
            }
         }else if($scope.updata.option[i].type==2){
            for(var j=0;j<$scope.updata.option[i].opt.length;j++){
               $scope.updata.option[i].opt[j].check=2;
               
            }
            $scope.updata.option[i].token='asdd'+i;
            $scope.wcledata2.push($scope.updata.option[i])
         }else{
            $scope.wcledata3.push($scope.updata.option[i])
         }

      }

      console.log($scope.wcledata1)
   },function(){})
   $scope.ssss='';
   /*单选*/

   $scope.cdsfuzhi=function(parentIndex,index){
      for(var i=0;i<$scope.wcledata1[parentIndex].opt.length;i++){
         $scope.wcledata1[parentIndex].opt[i].check=-1;
      }
      $scope.wcledata1[parentIndex].opt[index].check=1;
      
   }
   console.log($scope.wcledata1)
   /*多选*/ 
   $scope.ffn=function(parentIndex,index){
      console.log($scope.wcledata2[parentIndex].opt[index].check)
      if($scope.wcledata2[parentIndex].opt[index].check==1){
         $scope.wcledata2[parentIndex].opt[index].check=2;
         //console.log($scope.wcledata2[parentIndex].opt[index].check)
         //console.log($scope.wcledata2)
      }else{
         $scope.wcledata2[parentIndex].opt[index].check=1;
         //console.log($scope.wcledata2[parentIndex].opt[index].check)
          //console.log($scope.wcledata2)
      }
      
   }
   /*提交*/
   $scope.Fn=function(){
      /*单选*/
      for(var i=0;i<$scope.wcledata1.length;i++){        
         for(var j=0;j<$scope.wcledata1[i].opt.length;j++){
            if($scope.wcledata1[i].opt[j].check==1){
               $scope.wcledata1[i].opt[j].num+=1;
            }
            if($scope.wcledata1[i].opt[j].check){
              delete $scope.wcledata1[i].opt[j].check
            }
         }
         
      }
    /*多选*/ 
      for(var i=0;i<$scope.wcledata2.length;i++){
         for(var j=0;j<$scope.wcledata2[i].opt.length;j++){
            if($scope.wcledata2[i].opt[j].check==1){
               $scope.wcledata2[i].opt[j].num+=1
            }
            /*d*/
            if($scope.wcledata2[i].opt[j].check){
               delete $scope.wcledata2[i].opt[j].check
            }
         }
      }
      /*d多*/
      for(var i=0;i<$scope.wcledata2.length;i++){
         if($scope.wcledata2[i].token){
            delete $scope.wcledata2[i].token
         }
      }
      /*d单*/
      for(var i=0;i<$scope.wcledata1.length;i++){
         if($scope.wcledata1[i].check){
            delete $scope.wcledata1[i].check
            delete $scope.wcledata1[i].token
         }
      }
      console.log($scope.updata)

      $http({
         method:'put',
         url:serve+'/item/'+id,
         data:$scope.updata
      }).then(function(e){
         console.log(e)
      },function(){})
   }
   
	}])
