angular.module("LunchCheck", [])
.controller("LunchCheckController", LunchCheckController);
LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
	$scope.items = "";
	$scope.check = function () {
		var items = $scope.items;
		items = items.replace(/,,|, ,/g,",");
		items = items.split(",");
		var colorRed =  {
				"color": "red",
				"border": "2px solid red",
				"padding": "3px"
			};
		var colorGreen = {
				"color": "green",
				"border": "2px solid green",
				"padding": "3px"
			};
		if (items == "") {
			$scope.message = "Please enter data first";
			$scope.textColor = colorRed;
		} else if (items.length <= 3) {
			$scope.message = "Enjoy!";
			$scope.textColor = {
				"color": "green",
				"border": "2px solid green",
				"padding": "3px"
			};
		} else {
			$scope.message = "Too much!";
			$scope.textColor = colorGreen;
		};
	};
};