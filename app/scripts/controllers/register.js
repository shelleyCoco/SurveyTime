angular.module('surveyTimeApp').controller('zhuce', ['$scope', '$http', '$filter', function($scope, $http, $filter) {
		var yhm = /^[a-z0-9_-]{6,18}$/;
		var mm = /^[a-zA-Z\d_]{8,}$/;
		$scope.username = '';
		$scope.pw = '';

		function veri() {
			if($scope.username.length < 2 || $scope.username.length > 8) {
				alert('长度在2-8，请重新输入');
				return false;
			} else if($scope.pw.length < 8 || $scope.pw.length > 16) {
				alert('长度在8-16，请重新输入');
				return false;
			}
			return true;

		}

		$scope.clickLoginBtn = function() {
			if(veri()) {
				alert('success')
			} else {

			}
		}

	}])