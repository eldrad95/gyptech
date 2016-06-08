var GyptechUserMenu = angular.module('GyptechUserMenu', []);

GyptechUserMenu.controller('GyptechUserMenu', ['$scope', '$http', function($scope,$http){
	var userMenuItems = $scope.userMenuItems = [];
	$http.get('data/UserMenu.json').then(function(response){
		$scope.userMenuItems = response.data;
	});
	
}])

GyptechUserMenu.controller('userMenuItem', ['$scope',function($scope){
	$scope.changeImgSrc = function(bool) {
		if (bool == true) 
			$scope.ImageOver = { 'background-image' : 'url("images/' + $scope.userMenuItem.imageTitle + '_Active.png")'};
		else if (bool = false) 
			$scope.ImageOver = { 'background-image' : 'url("images/'+ $scope.userMenuItem.imageTitle + '_Rest.png")'}; 
	}
	
}])
