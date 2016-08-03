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
				flags: ["heart"]
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
				flags: []
			},
			{
				name: "crocodile",
				flags: ["flower", "heart", "sun"]
			},
			{
				name: "zebra",
				flags: ["flower"]
			},
			{
				name: "wombat",
				flags: ["heart", "sun"]
			},
			{
				name: "raccoon",
				flags: ["sun"]
			},
			{
				name: "pig",
				flags: ["flash"]
			},
			{
				name: "panda",
				flags: ["flower", "flash"]
			},
			{
				name: "oyster",
				flags: ["heart", "sun"]
			},
			{
				name: "alpaca",
				flags: ["flower", "heart", "sun"]
			},
			{
				name: "antelope",
				flags: ["flower"]
			},
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
			},
			{
				name: "zebra",
				flags: ["flower"]
			},
			{
				name: "wombat",
				flags: ["heart", "sun"]
			},
			{
				name: "raccoon",
				flags: ["sun"]
			},
			{
				name: "pig",
				flags: ["flash"]
			},
			{
				name: "panda",
				flags: ["flower", "flash"]
			},
			{
				name: "oyster",
				flags: ["heart", "sun"]
			},
			{
				name: "alpaca",
				flags: ["flower", "heart", "sun"]
			},
			{
				name: "antelope",
				flags: ["flower"]
			},
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
			},
			{
				name: "zebra",
				flags: ["flower"]
			},
			{
				name: "wombat",
				flags: ["heart", "sun"]
			},
			{
				name: "raccoon",
				flags: ["sun"]
			},
			{
				name: "pig",
				flags: ["flash"]
			},
			{
				name: "panda",
				flags: ["flower", "flash"]
			},
			{
				name: "oyster",
				flags: ["heart", "sun"]
			},
			{
				name: "alpaca",
				flags: ["flower", "heart", "sun"]
			},
			{
				name: "antelope",
				flags: ["flower"]
			},
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
			},
			{
				name: "zebra",
				flags: ["flower"]
			},
			{
				name: "wombat",
				flags: ["heart", "sun"]
			},
			{
				name: "raccoon",
				flags: ["sun"]
			},
			{
				name: "pig",
				flags: ["flash"]
			},
			{
				name: "panda",
				flags: ["flower", "flash"]
			},
			{
				name: "oyster",
				flags: ["heart", "sun"]
			},
			{
				name: "alpaca",
				flags: ["flower", "heart", "sun"]
			},
			{
				name: "antelope",
				flags: ["flower"]
			},
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
				flags: ["flash"]
			},
			{
				name: "crocodile",
				flags: ["flower", "heart", "sun"]
			},
			{
				name: "zebra",
				flags: ["flower"]
			},
			{
				name: "wombat",
				flags: ["heart", "sun"]
			},
			{
				name: "raccoon",
				flags: ["sun"]
			},
			{
				name: "pig",
				flags: ["flash"]
			},
			{
				name: "panda",
				flags: ["flower", "flash"]
			},
			{
				name: "oyster",
				flags: ["heart", "sun"]
			},
			{
				name: "alpaca",
				flags: ["flower", "heart", "sun"]
			},
			{
				name: "antelope",
				flags: ["flower"]
			},
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
				flags: ["sun"]
			},
			{
				name: "fox",
				flags: ["flower"]
			},
			{
				name: "horse",
				flags: ["flower", "heart", "flash"]
			},
			{
				name: "rabbit",
				flags: ["flower", "flash"]
			},
			{
				name: "crocodile",
				flags: ["flower", "heart", "sun"]
			},
			{
				name: "zebra",
				flags: ["flower"]
			},
			{
				name: "wombat",
				flags: ["heart", "sun"]
			},
			{
				name: "raccoon",
				flags: ["sun"]
			},
			{
				name: "pig",
				flags: ["flash"]
			},
			{
				name: "panda",
				flags: ["flower", "flash"]
			},
			{
				name: "oyster",
				flags: ["heart"]
			},
			{
				name: "alpaca",
				flags: ["flower", "sun"]
			},
			{
				name: "antelope",
				flags: ["flower"]
			},
			{
				name: "rabbit",
				flags: ["sun", "flash"]
			},
			{
				name: "crocodile",
				flags: [ "sun"]
			},
			{
				name: "zebra",
				flags: ["flower"]
			},
			{
				name: "wombat",
				flags: ["heart", "sun"]
			},
			{
				name: "raccoon",
				flags: ["sun"]
			},
			{
				name: "pig",
				flags: ["flash"]
			},
			{
				name: "panda",
				flags: ["flower", "flash"]
			},
			{
				name: "oyster",
				flags: ["heart", "sun"]
			},
			{
				name: "alpaca",
				flags: ["flower", "sun"]
			},
			{
				name: "antelope",
				flags: ["flower"]
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
