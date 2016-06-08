var GyptechApp = angular.module('GyptechApp',['GyptechMenu', 'GyptechUserMenu']);

var GyptechMenu = angular.module('GyptechMenu',[]);

GyptechMenu.controller('GyptechMenuCtrl', ['$scope','$http', function($scope,$http){
	var menuItems = $scope.menuItems = [];
	$http.get('data/MenuItems.json').then(function(response){
		$scope.menuItems = response.data;
	});
}])

GyptechMenu.controller('searchButton', ['$scope','$attrs', function($scope,$attrs){
	$scope.changeBg = function(bool) {
		if (bool == true) {
			$scope.onMouseHover = {'background-image' : 'url("images/' + $attrs.img + 'Hover.png")'};
		}
		else {
			$scope.onMouseHover = {'background-image' : 'url("images/' + $attrs.img + '.png")'};
		}
	}
}])

