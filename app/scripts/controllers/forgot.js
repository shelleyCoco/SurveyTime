angular
	.module('surveyTimeApp')
	.controller('forgot',['$scope','$http','url','$timeout','$state',function($scope,$http,url,$timeout,$state){
		$scope.modusername = '';
		$scope.modpassword = '';
		$scope.modconfirm = '';
		$scope.clickConfirm = function() {
			$http({
				url: url+"users/login",
				method: 'post',
				data: {
					'username': $scope.modusername,
					'password': $scope.modpassword
				},
			}).then(function(e) {
				console.log(e)
				var moduid = e.data.uid
				$http({
					url:url+'users/'+ moduid,
					method:'put',
					data:{
						'username':$scope.modusername,
						'password':$scope.modconfirm
					}
				}).then(function(e){
					$scope.hintTitle='修改成功！'
					$scope.hintB = true;
	               	$timeout(function(){
						$scope.hintB = false;
					},1000)
	               	$timeout(function(){
						$state.go('login')
					},1300)
				},function(){
					
				})
			}, function() {
				if($scope.modusername ==''){
					$scope.hintTitle='用户名不能为空';
					$scope.hintB = true;
	               	$timeout(function(){
						$scope.hintB = false;
					},1000)
				}else if($scope.modpassword ==''){
					$scope.hintTitle='密码不能为空';
					$scope.hintB = true;
	               	$timeout(function(){
						$scope.hintB = false;
					},1000)
				}else if($scope.modconfirm ==''){
					$scope.hintTitle='重置密码不能为空';
					$scope.hintB = true;
	               	$timeout(function(){
						$scope.hintB = false;
					},1000)
				}else{
					$scope.hintTitle='原始账号或密码错误，请重新输入';
					$scope.hintB = true;
	               	$timeout(function(){
						$scope.hintB = false;
					},1300)
	               	$scope.modusername = '';
					$scope.modpassword = '';
					$scope.modconfirm = '';
				}
			})
		}
	}])
