(function () {
	"use strict";
	angular.
	module("itemsFlagsApp", []).
	controller("ItemCtrl", ItemCtrl);

/**Контроллер, который сортирует и фильтрует список
 * элементов по имени
 */
	function ItemCtrl() {

		var self = this;

		self.items = __itemsListData;

		self.sortByName = sortByName;

		/**Функция сортировки в прямом порядке по алфавиту
		 * и в обратном порядке
		 */
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
