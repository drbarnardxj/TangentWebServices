app.factory('employees', ['$http', function($http) {
	// test to make sure it's carried through.
	console.log(sessionStorage.getItem('accessToken'));
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