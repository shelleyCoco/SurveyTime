angular.module("surveyTimeApp")
	.constant("serve", "http://47.90.20.200:1602")
	.controller('graph', ['$scope', 'data', 'url', '$stateParams','$state', function($scope, data, url, $stateParams,$state) {
		$scope.back=function(){
			$state.go("cds");
		}
		//		$scope.json = {
		//				"option": [{
		//					"title": "你每天学习几个小时？",
		//					"opt": [],
		//					"type": 0,
		//					"oop": "我每天学习8小时"
		//				}, {
		//					"title": "你每天睡觉几小时",
		//					"opt": [{
		//						"op": "8小时",
		//						"num": 20
		//					}, {
		//						"op": "9小时",
		//						"num": 11
		//					}],
		//					"type": 2,
		//					"oop": ""
		//				}, {
		//					"title": "你每天吃饭用多久",
		//					"opt": [{
		//						"op": "1小时",
		//						"num": 1
		//					}, {
		//						"op": "2小时",
		//						"num": 1
		//					}],
		//					"type": 2,
		//					"oop": ""
		//				}, {
		//					"title": "你每天吃饭用多久",
		//					"opt": [{
		//						"op": "1小时",
		//						"num": 1
		//					}, {
		//						"op": "2小时",
		//						"num": 1
		//					}],
		//					"type": 2,
		//					"oop": ""
		//				}],
		//				"uid": "56aa508e239548c2",
		//				"title": "你热爱学习吗",
		//				"id": "6c4087e8acf439b7"
		//			}
		//		$scope.labels = ["3个小时", "5个小时", "10小时"];
		//		$scope.data = [100, 100, 100];
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
		$scope.listArr = [];
		$scope.list = {
			labels: [],
			data: []
		}
		var total = 0
		data.get(url + 'item/'+index, function(e) {
			$scope.json = e.data
				//			console.log($scope.json)
				if($scope.json.option.length == 0){
					$scope.noList = true
					return
				}
			for(var y = 0; y < $scope.json.option.length; y++) {
				
				if($scope.json.option[y].type == 2 || $scope.json.option[y].type == 1) {
					listArr.push($scope.json.option[y])
				}
			}
			$scope.listArr = listArr
			for(var i = 0; i < listArr.length; i++) {
				for(var x = 0; x < listArr[i].opt.length; x++) {
					$scope.list.labels.push(listArr[i].opt[x].op)
					$scope.list.data.push(listArr[i].opt[x].num)
						//					console.log(listArr[i].opt[x].op)
				}
				for(var w=0;w<$scope.list.data;w++){
					total += $scope.list.data[w];
					
				}
				if(total == 0){
					$scope.noNum = true;
					return;
				}
				$scope.mesg.arr.push($scope.list.labels)
				$scope.mesg.arr2.push($scope.list.data)
//				$scope.list.labels = [];
//				$scope.list.data = [];
			}

			//			console.log($scope.mesg.arr2)
		})
		

	}]);