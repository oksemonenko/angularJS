// (function () {'use strict';
//
// 	angular.
// 	module('myApp', []).
// 	controller('WineCtrl', WineCtrl);
//
// // Functions - Definitions
// 	function WineCtrl() {
// 		// Variables - Private
// 		var self = this;
//
// 		// Variables - Public
// 		self.filter = {};
// 		self.items = [
// 			{
// 				name: "cat",
// 				flags: "flower"
// 			},
// 			{
// 				name: "mouse",
// 				flags: "heart"
// 			},
// 			{
// 				name: "dog",
// 				flags: "sun"
// 			},
// 			{
// 				name: "fox",
// 				flags: "flash"
// 			},
// 			{
// 				name: "horse",
// 				flags: "flower"
// 			},
// 			{
// 				name: "rabbit",
// 				flags: "heart"
// 			},
// 			{
// 				name: "crocodile",
// 				flags: "sun"
// 			}
// 		];
//
// 		// Functions - Public
// 		self.filterByCategory = filterByCategory;
// 		self.getCategories = getCategories;
//
// 		// Functions - Definitions
// 		function filterByCategory(item) {
// 			return self.filter[item.flags] || noFilter(self.filter);
// 		}
//
// 		function getCategories() {
// 			return (self.items || []).
// 			map(function (item) { return item.flags; }).
// 			filter(function (cat, idx, arr) { return arr.indexOf(cat) === idx; });
// 		}
//
// 		function noFilter(filterObj) {
// 			return Object.
// 			keys(filterObj).
// 			every(function (key) { return !filterObj[key]; });
// 		}
// 	}
//
// }());

(function () {'use strict';

	angular.
	module('myApp', []).
	controller('WineCtrl', WineCtrl);

// Functions - Definitions
	function WineCtrl() {
		// Variables - Private
		var self = this;

		// Variables - Public
		self.filterCategory = {};
		self.filterCountry = {};
		self.wines = [
			{name: 'Wine A', category: ['red', 'white', 'champagne'], country: 'champagne'},
			{name: 'Wine B', category: ['red', 'champagne'], country: 'France'},
			{name: 'Wine C', category: ['white', 'champagne'],  country: 'Italy'},
			{name: 'Wine D', category: ['red'],  country: 'Italy'},
			{name: 'Wine E', category: ['red', 'champagne'],  country: 'Italy'},
			{name: 'Wine F', category: ['red', 'white'],  country: 'France'},
			{name: 'Wine G', category: ['white', 'champagne'],  country: 'France'},
			{name: 'Wine H', category: ['white'],  country: 'Italy'}
		];

		// self.wines = [
		// 	{name: 'Wine A', category: 'red', country: 'champagne'},
		// 	{name: 'Wine B', category: 'red', country: 'France'},
		// 	{name: 'Wine C', category: 'white',  country: 'Italy'},
		// 	{name: 'Wine D', category: 'red',  country: 'Italy'},
		// 	{name: 'Wine E', category: 'red',  country: 'Italy'},
		// 	{name: 'Wine F', category: 'white',  country: 'France'},
		// 	{name: 'Wine G', category: 'champagne',  country: 'France'},
		// 	{name: 'Wine H', category: 'champagne',  country: 'Italy'}
		// ];

		// Functions - Public
		self.filterByCategory = filterByCategory;
		self.getCategories = getCategories;

		// self.getCountries = getCountries;
		// self.filterByCategoryAndCountry = filterByCategoryAndCountry;
		// self.filterByCountry = filterByCountry;

		// Functions - Definitions
		function filterByCategory(wine) {
			return self.filterCategory[wine.category] || noFilter(self.filterCategory);
		}

		// function filterByCategoryAndCountry(wine) {
		// 	return (self.filterCategory[wine.category] || noFilter(self.filterCategory)) &&
		// 			(self.filterCountry[wine.country] || noFilter(self.filterCountry));
		// }

		// function filterByCountry(wine) {
		// 	return self.filterCountry[wine.country] || noFilter(self.filterCountry);
		// }


		// function getCategories() {
		// 	return (self.wines || []).
		// 	map(function (wine) { return wine.category;
		// 	}).
		// 	filter(function (cat, idx, arr) { return arr.indexOf(cat) === idx; });
		// }

		function getCategories() {
			var arrayOfWineObjects = (self.wines || []);
			var arrayOfArraysOfWineCategories = arrayOfWineObjects.map(function (wine) {
				return wine.category;
			});
			var arrayOfWineCategories = [];
			arrayOfArraysOfWineCategories.forEach(function (arr) {
				arrayOfWineCategories = arrayOfWineCategories.concat(arr);
				return arrayOfWineCategories;
			});
			var filteredArrayOfWineCategories = arrayOfWineCategories.filter(function (cat, idx, arr) {
				return arr.indexOf(cat) === idx;
			});
			return filteredArrayOfWineCategories;
		}

		//Добавляет чекбоксы с названием страны
		// function getCountries() {
		// 	return (self.wines || []).
		// 	map(function (wine) { return wine.country; }).
		// 	filter(function (con, idx, arr) { return arr.indexOf(con) === idx; });
		// }

		function noFilter(filterObj) {
			return Object.
			keys(filterObj).
			every(function (key) { return !filterObj[key]; });
		}
	}

}());