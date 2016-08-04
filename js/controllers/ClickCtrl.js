(function () {
	"use strict";

	angular.
	module("itemsFlagsApp").
	controller("ClickCtrl", ClickCtrl);

/**Контроллер, который выводит информацию
 *  по текущему выбранному элементу любого списка
 */
	function ClickCtrl() {

		var self = this;
		var selectedItem;

		self.items = __itemsListData;

		self.clickItem = clickItem;
		self.clickElement = clickElement;
		self.markActiveElement = markActiveElement;

		//Функция, которая выводит информацию в отдельный блок
		function clickItem(item) {
			self.itemName = item.name;
			self.flag1 = item.flags[0];
			self.flag2 = item.flags[1];
			self.flag3 = item.flags[2];
			self.flag4 = item.flags[3];
			self.class = "active";
		}

		//Функция, которая отслеживает событие клика по элементу списка
		function clickElement(event) {
			var target = event.target;
			while (target != self) {
				if (target.tagName == "LI") {
					markActiveElement(target);
					return;
				}
				target = target.parentNode;
				markActiveElement(target);
			}
		}
		//Функция, которая помечает активный элемент списка
		function markActiveElement(node) {
			if (selectedItem) {
				selectedItem.classList.remove("items__item--active");
			}
			selectedItem = node;
			selectedItem.classList.add("items__item--active");
		}
	}
}());
