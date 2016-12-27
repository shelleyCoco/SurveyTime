angular
	.module('surveyTimeApp')
	.controller('forgot',['$scope','$http','url','$timeout',function($scope,$http,url,$timeout){
		var yhm = /^[a-z0-9_]{6,18}$/;
		var mm = /^[a-zA-Z\d_]{6,}$/;
		$scope.modusername = '';
		$scope.modpassword = '';
		$scope.modconfirm = '';
		$scope.clickConfirm = function() {
			$http({
				url: url+"users",
				method: 'put',
				data: {
					'username': $scope.modusername,
					'password': $scope.modpassword,
					'confirm': $scope.modconfirm
				}
			}).then(function(e) {
				console.log(e)
				$scope.hintTitle='注册成功！'
				$state.go('login')
				$scope.hintB = true;
               	$timeout(function(){
					$scope.hintB = false;
				},1000)
			}, function() {
//				$scope.hintTitle='用户名已有，请重新输入！';
//				$scope.hintB = true;
//             	$timeout(function(){
//					$scope.hintB = false;
//				},1000)
			})
//			var b=true;
//			if((!yhm.test($scope.username))) {
//             $scope.hintTitle='用户名在6-18位，请重新输入';
//             $scope.hintB = true;
//				$timeout(function(){
//					$scope.hintB = false;
//				},1000)
//				b = false;
//				}else if(!(mm.test($scope.pw))) {
//                  $scope.hintTitle='密码长度在6位以上，请重新输入';
//                  $scope.hintB = true;
//					$timeout(function(){
//					$scope.hintB = false;
//				},1000)
//				b = false;
//				}else if($scope.pw!=$scope.pw1) {
//                  $scope.hintTitle='两次输入的密码不一样，请重新输入！';
//                  $scope.hintB = true;
//					$timeout(function(){
//					$scope.hintB = false;
//				},1000)
//				b = false;
//				}else{
//					b = true;
//					}
//			if(b) {
//				$http({
//					url: 'http://47.90.20.200:1602/users',
//					method: 'post',
//					data: {
//						'username': $scope.username,
//						'password': $scope.pw
//					}
//				}).then(function() {
//					$scope.hintTitle='注册成功！'
//					$state.go('login')
//					$scope.hintB = true;
//                 	$timeout(function(){
//						$scope.hintB = false;
//					},1000)
//				}, function() {
//					$scope.hintTitle='用户名已有，请重新输入！';
//					$scope.hintB = true;
//                 	$timeout(function(){
//						$scope.hintB = false;
//					},1000)
//				})
//			}

		}
	}])
