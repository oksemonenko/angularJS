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

		self.clickItem = clickItem;

		// Functions - Definitions
		function clickItem(item) {
			self.msg = "Clicked: " + item.name;
		}
	}
}());
