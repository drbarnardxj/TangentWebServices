app.controller('myProfileController', ['$scope', 'myProfile', '$routeParams', function($scope, myProfile, $routeParams) {
	$scope.detail = {
		"id": "fetching..."
	};
	myProfile.success(function(data) {
    	$scope.detail = data;
	});
}]);