app.controller('myProfileController', ['$scope', 'myProfile', '$routeParams', function($scope, myProfile, $routeParams) {
	// fill data while fetching from API via myProfile
	$scope.detail = {
		"id": "fetching..."
	};
	myProfile.success(function(data) {
    if (data.is_active) {data.is_active = "Yes";} else {data.is_active = "No";}
    if (data.is_staff) {data.is_staff = "Yes";} else {data.is_staff = "No";}
    $scope.detail = data;
  });
}]);