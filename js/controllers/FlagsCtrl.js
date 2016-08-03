(function () {'use strict';

	angular.
	module('myApp').
	controller('FlagsCtrl', FlagsCtrl);

// Functions - Definitions
	function FlagsCtrl() {
		// Variables - Private
		var self = this;

		// Variables - Public
		self.filterFlags = {};

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
		self.filterByFlags = filterByFlags;
		self.getFlags = getFlags;


		// Functions - Definitions
		function filterByFlags(item) {
			return self.filterFlags[item.flags[0]] ||
						 self.filterFlags[item.flags[1]] ||
						 self.filterFlags[item.flags[2]] ||
						 self.filterFlags[item.flags[3]] ||
						 noFilter(self.filterFlags);
		}

		function getFlags() {
			var arrayOfItemObjects = (self.items || []);
			var arrayOfArraysOfItemFlags = arrayOfItemObjects.map(function (item) {
				return item.flags;
			});
			var arrayOfItemFlags = [];
			arrayOfArraysOfItemFlags.forEach(function (arr) {
				arrayOfItemFlags = arrayOfItemFlags.concat(arr);
				return arrayOfItemFlags;
			});
			var filteredArrayOfItemFlags = arrayOfItemFlags.filter(function (cat, idx, arr) {
				return arr.indexOf(cat) === idx;
			});
			return filteredArrayOfItemFlags;
		}

		function noFilter(filterObj) {
			return Object.
			keys(filterObj).
			every(function (key) { return !filterObj[key]; });
		}
	}

}());