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
  	$scope.cdsff='';
  	var url='http://47.90.20.200:1602';
    $scope.gg=function(){
    	$http({
	    	url:url+'/item/',
	  		method:'get',
	  		params:{'uid':localStorage.uid}
	    }).then(function(e){
			$scope.json=e.data;
			if($scope.json.length == 0){
				$scope.noList = true
				return
			}
			for(var i=0;i<$scope.json.length;i++){
				$scope.json[i].checked=false;
			}
	    },function(e){
	    	
	    });
    };
    $scope.gg();
    $scope.cdstc=function(){
    	localStorage.clear()
    	$state.go('login')
    }
    $scope.cdsqx=function(){
    	for(var i=0;i<$scope.json.length;i++){
			$scope.json[i].checked=false;
		}
    	$scope.cdschulai=false;
    	$scope.isshow=!$scope.isshow;
    }
	if(!(localStorage.uid)){
//		$scope.hintTitle = '您还没有登陆，请<a ui-serf="/login">登录</a>';
//		$scope.hintB = true
		return
	}
    $scope.cdsxinzeng=function(){
    	$state.go('create')
    }
    $scope.shanchu=function(a){
    	$scope.aa=a;
    	$scope.ab=true;
    }
    $scope.delete=function(index){
//  	console.log($scope.json[index].id)
		console.log(index)
    	var id=$scope.json[index].id
        
    	$http({
    		url:url+'/item/'+id,
    		method:'delete',

    	}).then(function(e){
//  		console.log(e)
			$scope.ab=false;
    		$scope.json.splice(index,1)
    		if($scope.json.length == 0){
				$scope.noList = true
				return
			}
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
  }]).directive('search',[function(){
	  	return {
			restrict:'CAME',
			scope:false,
			template:'<div><div class="cdsss">\
		        <form class="navbar-form navbar-left ng-pristine ng-valid mei" role="search"><div class="form-group"><input type="text" class="form-control" placeholder="Search" ng-model="sea"></div></form>\
		    </div></div>',
		    link:function(s,e,a){
		    	$(document).scroll(function(){
		    		//window.scrollTo(0,200)
		    		//console.log($(document).scrollTop())
		    		if($(document).scrollTop()>90){
		    			e.find('.cdsss').css({'position':'fixed','top':'3.2rem'})
		    		}else{
		    			e.find('.cdsss').css({'position':'','top':''})
		    		}
		    	})
		    }
		}
    
  }])
  .directive("dele",function(){
		return {
			restrict:"ECMA",
			template:'<div class="shan_bg" ng-if="ab"><div class="shan_que"><p>确认删除？</p><p><span id="k_quxiao" ng-click="qx()">取消</span><span id="k_shanchu" ng-click="delete(aa)">删除</span></p></div></div>',
			transclude:true,
			replace:false,
			scope:false,
			link:function(scope,ele,attrs){
				scope.ab=false;
				scope.qx=function(){
					scope.ab=false;
				}
			}
		}
	})
.directive('share',function(){
	return {
		restrict:'CAME',
		scope:false,
		replace:false,
		template:'<div class="shan_bg" ng-if="ab"><div class="shan_que"><p>{{d_ul}}</p><p><span id="k_quxiao" ng-click="qx()">取消</span></p></div></div>',
		link:function(scope,ele,attrs){
			scope.ab=false;
			scope.share=function(){
				scope.ab=true;
			}
			scope.qx=function(){
					scope.ab=false;
				}
			scope.ul=location.href;
			scope.x_ul=scope.ul.substring(0,scope.ul.length-3);
			scope.d_ul=scope.x_ul+"surveyPage/"+scope.json[attrs.dd].id;
			console.log(attrs.dd);
		}
	}
})











