"use strict";

var myApp = angular.module('myApp');
myApp.controller('itemController', function($scope) {

	// this.item = "item_name";
	// this.flags = ["flower", "heart", "sun", "flash"];
	// $scope.sortparam = "name";
	// $scope.sortparam1 = "-name";

	$scope.items = [
		{
			name: "cat",
			flags: ["flower", "heart", "sun", "flash"]
		},
		{
			name: "mouse",
			flags: ["flower", "heart", "sun", "flash"]
		},
		{
			name: "dog",
			flags: ["flower", "heart", "sun", "flash"]
		},
		{
			name: "fox",
			flags: ["flower", "heart", "sun", "flash"]
		},
		{
			name: "horse",
			flags: ["flower", "heart", "sun", "flash"]
		},
		{
			name: "rabbit",
			flags: ["flower", "heart", "sun", "flash"]
		},
		{
			name: "crocodile",
			flags: ["flower", "heart", "sun", "flash"]
		}
	];
	//
	// $scope.checked = function (){
	// 	$scope.sortparam = "name";
	// };
	// $scope.notChecked = function (answer){
	// 	$scope.sortparam1 = "-name";
	// };
	var filter = document.getElementById("filter");

	$scope.check = function () {
		if (filter.checked == true) {
			$scope.sortparam = "name";
		} else {
			$scope.sortparam = "-name";
		}
		// $scope.sortparam = evt == "checked" ? "name" : "-name";
	}
});
