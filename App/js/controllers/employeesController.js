app.controller('employeesController', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
	// fill data while fetching from API via myProfile
	$scope.employee = {
		"id": "fetching..."
	};
	$scope.filter = {};
	$scope.filter.race = "";
	$scope.filter.position = "";
	$scope.filter.gender = "";
	var filterString = "";
	$scope.searchFilter = function(){
		$(".loadingScreen").fadeIn(300);
		filterString = "?";
		var i = 0;
		for (var key in $scope.filter) {
			i++;
			console.log(key + ": " + $scope.filter[key] + "Active Filters: " + Object.keys($scope.filter).length);
			filterString += key + "=" + $scope.filter[key];
			if (i !== Object.keys($scope.filter).length) {filterString += "&";}
		}
		console.log("Search button clicked with data :" + $scope.filter.race);
		$http.get('http://staging.tangent.tngnt.co/api/employee/' + filterString, {headers: { Authorization: ' Token ' + sessionStorage.getItem('accessToken')}})
         .success(function(data) {
           $scope.employee = data;
         })
         .error(function(data) {
         	console.log("Could not retrieve data from: http://staging.tangent.tngnt.co/api/employee/ with Token : " + sessionStorage.getItem('accessToken') );
         	console.log(JSON.stringify(data));
           
         });
		$(".loadingScreen").fadeOut(300);
	}
	
	$scope.searchFilter();

	
}]);