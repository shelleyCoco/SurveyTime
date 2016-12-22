window.onload = function() {
	document.documentElement.style.fontSize = innerWidth / 16 + 'px';
	window.onresize = function() {
			document.documentElement.style.fontSize = innerWidth / 16 + 'px';
		}
		//默认执行随机验证码
	
}
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
						alert("请输入验证码！");
						return false;
					} else if(inputCode.toUpperCase() != code.toUpperCase()) {
						alert("验证码输入有误！");
						$scope.createCode();
						return false;
					} else {
						return true;
					}
				}
		$scope.log = function() {
			if($scope.loginuser == '') {
				alert('请填写用户名')
			} else if($scope.loginpass == '') {
				alert('请填写密码')
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
						$scope.loginuser = '';
						$scope.loginpass = '';
						$scope.loginpic = '';
					}
					localStorage.uid = e.data.uid
					$state.go('cds')
				}, function(e) {
//					validateCode()
					alert('用户名或密码不正确')
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
			//		scope:{"title":"@t",data:"=lxy",data2:"=lxy2"},
			replace: true,
			link: function(s, e, a) {
				
				//			e.find(".carousel").carousel({
				//				interval:2000
				//			})
				
				
			}
		}
	})