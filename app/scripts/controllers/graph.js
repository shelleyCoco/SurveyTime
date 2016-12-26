angular.module("surveyTimeApp")
	.constant("serve", "http://47.90.20.200:1602")
	.controller('graph', ['$scope', function($scope) {
		$scope.labels = ["3个小时", "5个小时", "10小时"];
		$scope.data = [100, 100, 100];
		console.log($scope.gg)
	}]);