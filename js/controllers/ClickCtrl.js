(function () {
	'use strict';

	angular.
	module('myApp').
	controller('ClickCtrl', ClickCtrl);

// Functions - Definitions
	function ClickCtrl() {
		// Variables - Private
		var self = this;
		var selectedItem;

		// Variables - Public
		self.items = __itemListData;
		// Functions - Public
		self.clickItem = clickItem;
		self.clickLi = clickLi;
		self.highlight = highlight;

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
			self.class = "active";
		}

		function clickLi(event) {
			var target = event.target;
			while (target != self) {
				if (target.tagName == 'LI') {
					highlight(target);
					return;
				}
				target = target.parentNode;
				highlight(target);
			}
		}

		function highlight(node) {
			if (selectedItem) {
				selectedItem.classList.remove('items__item--active');
			}
			selectedItem = node;
			selectedItem.classList.add('items__item--active');
		}
	}
}());
