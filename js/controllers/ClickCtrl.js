(function () {
	'use strict';

	angular.module('myApp').controller('ClickCtrl', ClickCtrl);

// Functions - Definitions
	function ClickCtrl() {
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

		self.clickItem = clickItem;

		// Functions - Definitions
		function clickItem(item) {
			self.msg = "Clicked: " + item.name;
			self.info = "Info";
			self.name = "Name : ";
			self.itemName = item.name;
			self.flags = "Flags : ";
			self.flag1 = item.flags[0];
			self.flag2 = item.flags[1];
			self.flag3 = item.flags[2];
			self.flag4 = item.flags[3];
			// for (var i = 0; i <= 4, i++;) {
			// 	self.flag = item.flags[i];
			// 	self.class = item.flags[i];
			// }
		}
	}
}());
