app.controller('employeesController', ['$scope', 'employees', '$routeParams', function($scope, employees, $routeParams) {
	// fill data while fetching from API via myProfile
	$scope.employee = {
		"id": "fetching..."
	};
	employees.success(function(data) {
    $scope.employee = data;
  });
}]);