	angular.module("surveyTimeApp",[])
	//.constant("serve","http://")
	.controller("add_que",function($scope,$http){
		$scope.updata={};
		$scope.updata.option=[];
//		$scope.updata.option=[{"title":"你每天学习几个小时？","opt":[],"type":2,"oop":"我每天学习8小时"}];
		$scope.add=function(){
			$scope.updata.option.push({});
		}
		$scope.sub=function(){
//			$http({
//			method:"post",
//			url:server+"/item/",
//			data:x,
//			}).success(function(e){
//					
//			}).error(function(){alert("error!")})
				console.log($scope.updata)
		}
		
		})
	.directive("addque",function(){
	return {
		restrict:"ECMA",
		template:'<div>\
		<div class="form-group"><label for="exampleInputEmail1" class="ng-binding">问题{{index}}</label><input ng-model="updata_que.title" type="text" class="form-control ng-pristine ng-valid ng-empty ng-valid-email ng-touched" id="exampleInputEmail1" placeholder="请输入你的问题"></div>\
	<div class="form-group"><label for="">问题类型</label></br>\
		<div class="radio-inline"> <label> <input type="radio" name="optionsRadios{{index}}" id="optionsRadios1" value="option1" ng-click="xuan1()"> 填空 </label> </div>\
		<div class="radio-inline"> <label> <input type="radio" name="optionsRadios{{index}}" id="optionsRadios2" value="option2" ng-click="xuan2()"> 单选 </label> </div>\
		<div class="radio-inline"> <label> <input type="radio" name="optionsRadios{{index}}" id="optionsRadios3" value="option3" ng-click="xuan3()"> 多选 </label> </div>\
		<div class="radio-inline"> <label> <input type="radio" name="optionsRadios{{index}}" id="optionsRadios4" value="option4" ng-click="xuan4()"> 简答 </label> </div>\
	</div>\
	<div ng-if="bool">\
		<div ng-repeat="updata_xx in updata_que.opt">\
			<input type="text" class="form-control ng-pristine ng-valid ng-empty ng-valid-email ng-touched" id="exampleInputEmail1" placeholder="请输入选项内容" ng-model="updata_xx.op">\
		<div style="color:#999" class="btn btn-default glyphicon glyphicon-minus" ng-click="sub_danx($index)"></div>\
		</div>\
		<div style="color:#999" class="btn btn-default glyphicon glyphicon-plus" ng-click="add_danx()"></div>\
	</div>\
</div>',
		transclude:true,//开启保留原内容，需要ng-transclude在模板xx中的某个标签中配合，把原内容放在这个标签中
		replace:false,
		scope:true,
		link:function(scope,element,attrs){
		scope.updata_que.opt=[{"op":""}];
		scope.updata_que.opt=[{"op":""}];
		scope.index=Number(attrs.index)+1;
		scope.add_danx=function(){
			scope.updata_que.opt.push({});
		}
		scope.add_duox=function(){
			scope.updata_que.opt.push({});
		}
		scope.sub_danx=function(a){
			scope.updata_que.opt.splice(a,1);
		}
		scope.sub_duox=function(a){
			scope.updata_que.opt.splice(a,1);
		}
		scope.xuan1=function(){
			scope.updata_que.type=0;
			scope.bool=false;
			scope.updata_que.opt=[];
		}
		scope.xuan2=function(){
			scope.updata_que.type=1;
			scope.bool=true;
			scope.updata_que.opt=[];
		}
		scope.xuan3=function(){
			scope.updata_que.type=2;
			scope.bool=true;
			scope.updata_que.opt=[];
		}
		scope.xuan4=function(){
			scope.updata_que.type=3;
			scope.bool=false;
			scope.updata_que.opt=[];
		}
		
		}
	}
	})
