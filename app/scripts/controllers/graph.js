angular.module("surveyTimeApp")
	.constant("serve", "http://47.90.20.200:1602")
//	.config(['ChartJsProvider', function(ChartJsProvider) {
//		// Configure all charts
//		ChartJsProvider.setOptions({
//			chartColors: ['#FF5252', '#FF8A80'],
//			responsive: false
//		});
//		// Configure all line charts
//		ChartJsProvider.setOptions('line', {
//			showLines: false
//		});
//	}])
//	.controller("graph", ['$scope', '$timeout', function($scope, $timeout) {
//
//		$scope.colors = ["rgba(159,204,0,0.5)", "rgba(250,109,33,0.7)", "rgba(154,154,154,0.5)"];
//		$scope.labels = ["January", "February", "March"];
//		$scope.series = ['Series A', 'Series B'];
//		$scope.data = [
//			//  [65, 59, 80, 81, 56, 55, 40],
//			[28, 48, 40]
//		];
//		$scope.onClick = function(points, evt) {
//			console.log(points, evt);
//		};
//
//		// Simulate async data update
//		$timeout(function() {
//			$scope.data = [
//				//    [28, 48, 40, 19, 86, 27, 90],
//				[65, 59, 80]
//			];
//		}, 1000);
//
//		$scope.labels = ["Green", "Orange", "Grey"];
////		$scope.data = [300, 500, 100];
//		// $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales",'222'];
//		//$scope.data = [300, 300, 100,100],
//		//				[100, 300, 50,100]
//	}]);
angular.module('surveyTimeApp')
  .controller('graph', function ($scope) {
    $scope.labels = ["3个小时", "5个小时", "10小时"];
  $scope.data = [100, 100, 100];
});
