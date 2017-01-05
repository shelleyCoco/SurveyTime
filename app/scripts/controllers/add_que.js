	angular.module("surveyTimeApp")
	.constant("serve","http://47.90.20.200:1602")
	.controller("create",['$scope','$http','serve','$state','$timeout',function($scope,$http,serve,$state,$timeout){
		$scope.updata={"uid":localStorage.uid,"title":"","id":"","option":[]};
		$scope.updata.option=[];
		$scope.add=function(){
			$scope.updata.option.push({"title":"","type":0,"opt":[],"oop":""});
		}
		$scope.cancel=function(){
			$scope.updata={};
			$state.go("cds");
		}
		$scope.sub=function(){
			$scope.mywj.$invalid=true;
			var b=true;
			if($scope.updata.option.length==0){
				b=false;
			}else{
			for(var i=0;i<$scope.updata.option.length;i++){
				if($scope.updata.option[i].type==1||$scope.updata.option[i].type==2){
				if($scope.updata.option[i].opt.length<2){
					b=false;
					break;
				}else{
					b=true;
				}
			}
		}
			}
			if(b){
				$http({
				method:"post",
				url:serve+"/item/",
				data:$scope.updata,
				}).then(function(e){
					$state.go("cds");
				},function(){})
			}else if($scope.updata.option.length==0&&b==false){
					$scope.hintTitle = '至少有一个问题';
					$scope.hintB = true;
					$timeout(function(){
						$scope.hintB = false;
					},1000)
			}else{
					$scope.hintTitle = '选择题至少有两个选项';
					$scope.hintB = true;
					$timeout(function(){
						$scope.hintB = false;
					},1000)
			}
		}
		}])
	.directive("addque",function(){
	return {
		restrict:"ECMA",
		template:'<div class="yky_mt2">\
		<div class="form-group">\
		<div class="row yky_title">\
		<div class="col-xs-10">\
		<label for="exampleInputEmail1" class="ng-binding">问题{{$index+1}}</label>\
		</div>\
		<div class="col-xs-2">\
		<div style="color:#999" class="glyphicon glyphicon-remove" data-toggle="modal" data-target="#assetDelete" ng-click="dele($index)"></div>\
		</div>\
		</div>\
		<input ng-model="updata_que.title" type="text" class="form-control ng-pristine ng-valid ng-empty ng-valid-email ng-touched" id="exampleInputEmail1" placeholder="请输入你的问题" required>\
		</div>\
		<div class="form-group"><label for="">问题类型</label></div>\
		<div class="row yky_h24">\
		<div class="col-xs-10 yky_xx">\
		<div class="radio-inline"> <label class="demo--label" for="optionsRadios1"> <input type="radio" name="optionsRadios{{$index}}" id="optionsRadios1" value="option1" ng-click="xuan1()" ng-checked="true"> <div class=" demo--radioInput"></div>填空 </label> </div>\
		<div class="radio-inline"> <label class="demo--label" for="optionsRadios2"> <input type="radio" name="optionsRadios{{$index}}" id="optionsRadios2" value="option2" ng-click="xuan2()"> <div class=" demo--radioInput"></div> 单选</label> </div>\
		<div class="radio-inline"> <label class="demo--label" for="optionsRadios3"> <input type="radio" name="optionsRadios{{$index}}" id="optionsRadios3" value="option3" ng-click="xuan3()"> <div class=" demo--radioInput"></div> 多选 </label> </div>\
		<div class="radio-inline"> <label class="demo--label" for="optionsRadios4"> <input type="radio" name="optionsRadios{{$index}}" id="optionsRadios4" value="option4" ng-click="xuan4()"> <div class=" demo--radioInput"></div> 简答</label> </div>\
		</div>\
		<div class="col-xs-2" ng-if="bool2">\
		<div style="color:#999" class="glyphicon glyphicon-plus" ng-click="add_danx()"></div>\
		</div>\
	</div>\
	<div ng-if="bool">\
		<div ng-repeat="updata_xx in updata_que.opt" class="row yky_mt">\
		<div class="col-xs-10">\
			<input type="text" class="form-control ng-pristine ng-valid ng-empty ng-valid-email ng-touched" placeholder="请输入选项内容" ng-model="updata_xx.op" required>\
			</div>\
			<div class="col-xs-2 yky_pl">\
		<div style="color:#999" class="btn btn-default glyphicon glyphicon-minus" ng-click="sub_danx($index)"></div>\
		</div>\
		</div>\
	</div>\
   <delet></delet>\
</div>',
		transclude:true,//开启保留原内容，需要ng-transclude在模板xx中的某个标签中配合，把原内容放在这个标签中
		replace:false,
		scope:true,
		link:function(scope,element,attrs){
		scope.dele=function(){
			scope.ab=true;
		}
		scope.sub_que=function(a){
			scope.updata.option.splice(a,1);
		}
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
			scope.updata_que.opt=[{"op":"","num":0}];
		}
		scope.xuan3=function(){
			scope.updata_que.type=2;
			scope.bool=true;
			scope.bool2=true;
			scope.updata_que.opt=[{"op":"","num":0}];
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
	.directive("delet",function(){
		return {
			restrict:"ECMA",
			template:'<div class="shan_bg" ng-if="ab"><div class="shan_que"><p>确认删除？</p><p><span id="k_quxiao" ng-click="qx()">取消</span><span id="k_shanchu" ng-click="sub_que($index)">删除</span></p></div></div>',
			transclude:true,//开启保留原内容，需要ng-transclude在模板xx中的某个标签中配合，把原内容放在这个标签中
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
