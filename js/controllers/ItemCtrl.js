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

		// Functions - Definitions


		function sortByName() {
			var sort = document.getElementById("sort");

			if (sort.checked == true) {
				self.sortparam = "name";
			} else {
				self.sortparam = "-name";
			}
		}

	}
}());
