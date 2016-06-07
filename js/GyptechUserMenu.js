var GyptechUserMenu = angular.module('GyptechUserMenu', []);

GyptechUserMenu.controller('GyptechUserMenu', ['$scope', '$http', function($scope,$http){
	var userMenuItems = $scope.userMenuItems = [];
	$http.get('data/UserMenu.json').then(function(response){
		$scope.userMenuItems = response.data;
	});
	
}])
