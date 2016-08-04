(function () {
	"use strict";

	angular.
	module("itemsFlagsApp").
	controller("FlagsCtrl", FlagsCtrl);

/**Контроллер, который фильтрует список
 *  по наличию свойств у элемента
 */
	function FlagsCtrl() {
		var self = this;

		self.filterFlags = {};

		self.items = __itemsListData;

		self.filterByFlags = filterByFlags;
		self.getFlags = getFlags;

		/**Функция, которая фильтрует список элементов либо
		 * выводит полный список при отсутствии выбранного фильтра
		 */
		function filterByFlags(item) {
			return self.filterFlags[item.flags[0]] ||
						 self.filterFlags[item.flags[1]] ||
						 self.filterFlags[item.flags[2]] ||
						 self.filterFlags[item.flags[3]] ||
						 noFilter(self.filterFlags);
		}

		/**Функция, которая получает список свойств элементов
		 *  для формирования списка фильтров
		 */
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

		//Функция, которая выводит весь список элементов
		function noFilter(filterObj) {
			return Object.
			keys(filterObj).
			every(function (key) { return !filterObj[key]; });
		}
	}
}());