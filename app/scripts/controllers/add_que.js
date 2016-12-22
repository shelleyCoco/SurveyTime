	window.onload = function(){
	document.documentElement.style.fontSize  = innerWidth/16 + 'px';
	window.onresize = function(){
		document.documentElement.style.fontSize  = innerWidth/16 + 'px';
	}
}
	angular.module("surveyTimeApp")
	.constant("serve","http://47.90.20.200:1602")
	.controller("create",['$scope','$http','serve',function($scope,$http,serve){
		$scope.updata={"uid":localStorage.uid,"title":"","id":"","option":[]};
		$scope.updata.option=[];
		$scope.add=function(){
			$scope.updata.option.push({"title":"","type":0,"opt":[],"oop":""});
		}
		$scope.sub=function(){
			$http({
			method:"post",
			url:serve+"/item/",
			data:$scope.updata,
			}).then(function(e){
					console.log(e)
			},function(){})
		}
		
		}])
	.directive("addque",function(){
	return {
		restrict:"ECMA",
		template:'<div>\
		<div class="form-group">\
		<label for="exampleInputEmail1" class="ng-binding">问题{{index}}</label>\
		<input ng-model="updata_que.title" type="text" class="form-control ng-pristine ng-valid ng-empty ng-valid-email ng-touched" id="exampleInputEmail1" placeholder="请输入你的问题">\
		</div>\
		<div class="form-group"><label for="">问题类型</label></div></br>\
		<div class="row yky_h24">\
		<div class="col-xs-10">\
		<div class="radio-inline"> <label> <input type="radio" name="optionsRadios{{index}}" id="optionsRadios1" value="option1" ng-click="xuan1()" ng-checked="true"> 填空 </label> </div>\
		<div class="radio-inline"> <label> <input type="radio" name="optionsRadios{{index}}" id="optionsRadios2" value="option2" ng-click="xuan2()"> 单选 </label> </div>\
		<div class="radio-inline"> <label> <input type="radio" name="optionsRadios{{index}}" id="optionsRadios3" value="option3" ng-click="xuan3()"> 多选 </label> </div>\
		<div class="radio-inline"> <label> <input type="radio" name="optionsRadios{{index}}" id="optionsRadios4" value="option4" ng-click="xuan4()"> 简答 </label> </div>\
		</div>\
		<div class="col-xs-2" ng-if="bool2">\
		<div style="color:#999" class="glyphicon glyphicon-plus" ng-click="add_danx()"></div>\
		</div>\
	</div>\
	<div ng-if="bool">\
		<div ng-repeat="updata_xx in updata_que.opt" class="row yky_mt">\
		<div class="col-xs-10 yky_pr">\
			<input type="text" class="form-control ng-pristine ng-valid ng-empty ng-valid-email ng-touched" id="exampleInputEmail1" placeholder="请输入选项内容" ng-model="updata_xx.op">\
			</div>\
			<div class="col-xs-2">\
		<div style="color:#999" class="btn btn-default glyphicon glyphicon-minus" ng-click="sub_danx($index)"></div>\
		</div>\
		</div>\
	</div>\
</div>',
		transclude:true,//开启保留原内容，需要ng-transclude在模板xx中的某个标签中配合，把原内容放在这个标签中
		replace:false,
		scope:true,
		link:function(scope,element,attrs){
		scope.index=Number(attrs.index)+1;
		scope.add_danx=function(){
			scope.updata_que.opt.push({"op":"","num":0});
		}
		scope.add_duox=function(){
			scope.updata_que.opt.push({"op":"","num":0});
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
			scope.bool2=false;
			scope.updata_que.opt=[];
		}
		scope.xuan2=function(){
			scope.updata_que.type=1;
			scope.bool=true;
			scope.bool2=true;
			scope.updata_que.opt=[];
		}
		scope.xuan3=function(){
			scope.updata_que.type=2;
			scope.bool=true;
			scope.bool2=true;
			scope.updata_que.opt=[];
		}
		scope.xuan4=function(){
			scope.updata_que.type=3;
			scope.bool=false;
			scope.bool2=false;
			scope.updata_que.opt=[];
		}
		
		}
	}
	})
