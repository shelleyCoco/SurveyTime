angular.module("surveyTimeApp")
	.constant("serve", "http://47.90.20.200:1602")
	.controller('graph', ['$scope', 'data', 'url', '$stateParams', '$state', function($scope, data, url, $stateParams, $state) {
		$scope.back = function() {
				$state.go("cds");
			}
		var index = $stateParams.index
		$scope.json = {}
		$scope.mesg = {};
		$scope.mesg.arr = [];
		$scope.mesg.arr2 = [];
		$scope.noList = false
		$scope.noNum = false
		var list = [];
		var result = [];
		var index = $stateParams.index
		var listArr = [];
		var fillText = []
		var fillTextarea = []
		$scope.fillText = []
		$scope.fillTextarea = []
		$scope.listArr = [];
		$scope.list = {
			labels: [],
			data: []
		}
		$scope.listText = {
			data: []
		}
		$scope.listTextarea = {
			data: []
		}
		var total = 0
		data.get(url + 'item/' + index, function(e) {
			$scope.json = e.data
				//			console.log($scope.json)
			if($scope.json.option.length == 0) {
				$scope.noList = true
				return
			}
			for(var y = 0; y < $scope.json.option.length; y++) {
				if($scope.json.option[y].type == 2 || $scope.json.option[y].type == 1) {
					listArr.push($scope.json.option[y])
				} else if($scope.json.option[y].type == 0) {
					fillText.push($scope.json.option[y])
				} else if($scope.json.option[y].type == 3) {
					fillTextarea.push($scope.json.option[y])
				}
			}
			$scope.listArr = listArr
			$scope.fillText = fillText
			$scope.fillTextarea = fillTextarea
				//			if(listArr.length == 0){
				//					$scope.noList = true
				//					return
				//				}
				//选择题
			for(var i = 0; i < listArr.length; i++) {
				for(var x = 0; x < listArr[i].opt.length; x++) {
					$scope.list.labels.push(listArr[i].opt[x].op)
					$scope.list.data.push(listArr[i].opt[x].num)
						//					console.log(listArr[i].opt[x].op)
				}

				for(var w = 0; w < $scope.list.data.length; w++) {
					total += $scope.list.data[w];

				}
				//					console.log(total)
				if(total == 0) {
					$scope.noNum = true;
					break;
				} else {
					$scope.noNum = false;
				}
				$scope.mesg.arr.push($scope.list.labels)
				$scope.mesg.arr2.push($scope.list.data)
				$scope.list.labels = [];
				$scope.list.data = [];
			}
			//			console.log($scope.fillTextarea)
			//填空
			for(var i = 0; i < $scope.fillText.length; i++) {
				if($scope.fillText[i].oop == '') {
					$scope.noNumText = true
				}
				$scope.listText.data.push($scope.fillText[i].oop)
			}
			//简答
			for(var i = 0; i < $scope.fillTextarea.length; i++) {
				if($scope.fillTextarea[i].oop == '') {
					$scope.noNumTextarea = true
				}
				$scope.listTextarea.data.push($scope.fillTextarea[i].oop)
			}
		})

	}]);