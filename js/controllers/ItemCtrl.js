(function () { "use strict";
	angular.
	module('myApp', []).
	controller('ItemCtrl', ItemCtrl);

// Functions - Definitions
	function ItemCtrl() {
		// Variables - Private
		var self = this;

		// Variables - Public
		self.items = [
			{
				name: "cat",
				flags: ["flower", "flash"]
			},
			{
				name: "mouse",
				flags: ["heart", "sun", "flash"]
			},
			{
				name: "dog",
				flags: ["sun", "flash"]
			},
			{
				name: "fox",
				flags: ["flower", "sun", "flash"]
			},
			{
				name: "horse",
				flags: ["flower", "heart", "flash"]
			},
			{
				name: "rabbit",
				flags: ["flower", "heart", "sun", "flash"]
			},
			{
				name: "crocodile",
				flags: ["flower", "heart", "sun"]
			}
		];

		// Functions - Public
		self.sortByName = sortByName;
		self.clickItem = clickItem;

		// Functions - Definitions


		function sortByName() {
			var sort = document.getElementById("sort");

			if (sort.checked == true) {
				self.sortparam = "name";
			} else {
				self.sortparam = "-name";
			}
		}

		function clickItem(item) {
			self.msg = "Clicked: " + item.name;
		}
	}
}());
// var myApp = angular.module('myApp');
// myApp.controller('itemController', function($scope) {
//
// 	// this.item = "item_name";
// 	// this.flags = ["flower", "heart", "sun", "flash"];
// 	// $scope.sortparam = "name";
// 	// $scope.sortparam1 = "-name";
//
// 	$scope.items = [
// 		{
// 			name: "cat",
// 			flags: ["flower", "flash"]
// 		},
// 		{
// 			name: "mouse",
// 			flags: ["heart", "sun", "flash"]
// 		},
// 		{
// 			name: "dog",
// 			flags: ["sun", "flash"]
// 		},
// 		{
// 			name: "fox",
// 			flags: ["flower", "sun", "flash"]
// 		},
// 		{
// 			name: "horse",
// 			flags: ["flower", "heart", "flash"]
// 		},
// 		{
// 			name: "rabbit",
// 			flags: ["flower", "heart", "sun", "flash"]
// 		},
// 		{
// 			name: "crocodile",
// 			flags: ["flower", "heart", "sun"]
// 		}
// 	];
// 	//
// 	// $scope.checked = function (){
// 	// 	$scope.sortparam = "name";
// 	// };
// 	// $scope.notChecked = function (answer){
// 	// 	$scope.sortparam1 = "-name";
// 	// };
// 	var sort = document.getElementById("sort");
//
// 	$scope.sortByName = function () {
// 		if (sort.checked == true) {
// 			$scope.sortparam = "name";
// 		} else {
// 			$scope.sortparam = "-name";
// 		}
// 		// $scope.sortparam = evt == "checked" ? "name" : "-name";
// 	};
//
// 	$scope.clickItem = function(item) {
// 		$scope.msg = "Clicked: " + item.name;
// 	};
//
//
// 	// var filterFlower = document.getElementById("filter-flower");
// 	// $scope.filter = function () {
// 	// 	if (filterFlower.checked == true) {
// 	//
// 	// 	}
// 	// }
// });

// myApp.filter("flagSort", function (flags) {
// 	if (item.flags === "flower") {
// 		return true;
// 	}
// });


