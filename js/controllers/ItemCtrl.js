(function () { "use strict";
	angular.
	module('myApp', []).
	controller('ItemCtrl', ItemCtrl);

// Functions - Definitions
	function ItemCtrl() {
		// Variables - Private
		var self = this;

		// Variables - Public
		self.items = __itemListData;

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
