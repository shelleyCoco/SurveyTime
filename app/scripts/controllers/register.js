angular.module('surveyTimeApp').controller('register', ['$scope', '$http', '$filter','$state',function($scope, $http, $filter, $state) {
		var yhm = /^[a-z0-9_]{6,18}$/;
		var mm = /^[a-zA-Z\d_]{10,}$/;
		$scope.username = '';
		$scope.pw = '';
		$scope.pw1 = '';

		function veri() {
			if((!yhm.test($scope.username))) {
				alert('用户名在6-18，请重新输入');
				return false;
				}else if(!(mm.test($scope.pw))) {
					alert('密码长度在8位以上，请重新输入');
					return false;
				}else if($scope.pw!=$scope.pw1) {
					alert('两次输入的密码不一样，请重新输入！');
					return false;
				}else{
					return true;
					}
			}
		$scope.clickLoginBtn = function() {
			if(veri()) {
				$http({
					url: 'http://47.90.20.200:1602/users',
					method: 'post',
					data: {
						'username': $scope.username,
						'password': $scope.pw
					}
				}).then(function() {
					alert('注册成功！')
					$state.go('login')
				}, function() {
					alert('用户名已经被注册，换个试试！')
				})
			}

		}
	}])