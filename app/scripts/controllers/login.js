var code;
angular
	.module('surveyTimeApp')
	.controller('login', ['$scope', '$http', 'url', '$state', '$timeout',function($scope, $http, url, $state,timeout) {
		$scope.code = {}
		$scope.loginuser = '';
		$scope.loginpass = '';
		$scope.loginpic = '';
		var t = timeout(function() {
			$scope.createCode()
		}, 30)
		$scope.createCode = function(){
			code = "";
			var codeLength = 4; //验证码的长度
			var checkCode = document.getElementById("checkCode");
			var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
				'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
				'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //所有候选组成验证码的字符，当然也可以用中文的
			for(var i = 0; i < codeLength; i++) {
				var charNum = Math.floor(Math.random() * 52);
				code += codeChars[charNum];
			}
			if(checkCode) {
				checkCode.className = "code";
				checkCode.innerHTML = code;
			}
		}

		$scope.validateCode = function(){
			var inputCode = document.getElementById("inputCode").value;
			if(inputCode.length <= 0) {
				alert(1)
				$scope.hintTitle = '请输入验证码';
				return false;
			} else if(inputCode.toUpperCase() != code.toUpperCase()) {
				$scope.hintTitle = '验证码输入有误';
				$scope.createCode();
				return false;
			} else {
				return true;
			}
		}
		$scope.log = function() {
			if($scope.loginuser == '') {
				$scope.hintTitle = '请填写用户名';
				$scope.hintB = true;
				timeout(function(){
					$scope.hintB = false;
				},1000)
			} else if($scope.loginpass == '') {
				$scope.hintTitle = '请填写密码';
				$scope.hintB = true
				timeout(function(){
					$scope.hintB = false;
				},1000)
			} else if($scope.validateCode()) {
				$http({
					url: url + "users/login",
					method: "post",
					data: {
						username: $scope.loginuser,
						password: $scope.loginpass
					},
					dataType: 'json',
				}).then(function(e) {
					console.log(e)
					if(status = '200'){
						$scope.hintTitle = '登陆成功';
						$scope.loginuser = '';
						$scope.loginpass = '';
						$scope.loginpic = '';
					}
					localStorage.uid = e.data.uid
					$state.go('cds')
				}, function(e) {
					$scope.hintTitle = '用户名或密码不正确';
					$scope.hintB = true
					timeout(function(){
						$scope.hintB = false;
					},1000)
					$scope.hintTitle = '用户名或密码不正确';
					$scope.loginpass = '';
					$scope.loginpic = '';
				})

			}
		}
	}])
	.directive("validateCode", function() {
		return {
			restrict: "ECAM",
			templateUrl: 'views/validateCode.html',
			replace: true,
			link: function(s, e, a) {
				
			}
		}
	})