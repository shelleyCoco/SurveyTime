angular.module("surveyTimeApp")
	.constant("serve","http://47.90.20.200:1602")
	.controller('graph',['$scope',function(scope){
		
	}])
	.directive('graphPage',function(){
		return {
			restrict:'E',
			template:'<canvas id="line" class="chart chart-line" chart-data="data"chart-labels="labels" chart-series="series" chart-options="options"chart-dataset-override="datasetOverride" chart-click="onClick"></canvas>'
		}
	})
