app.factory('employees', ['$http', function($http, $scope) {
	// test to make sure it's carried through.
	try {console.log("race filter: " + $scope.filter.race);} catch(e) {console.log("Race filter not set");}
	return $http.get('http://staging.tangent.tngnt.co/api/employee/', {headers: { Authorization: ' Token ' + sessionStorage.getItem('accessToken')}})
         .success(function(data) {
           return data;
         })
         .error(function(data) {
         	console.log("Could not retrieve data from: http://staging.tangent.tngnt.co/api/employee/ with Token : " + sessionStorage.getItem('accessToken') );
         	console.log(JSON.stringify(data));
           return data;
         });
        
}]);
