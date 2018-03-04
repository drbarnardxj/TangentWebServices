app.factory('myProfile', ['$http', function($http) {
	// test to make sure it's carried through.
	console.log(sessionStorage.getItem('accessToken'));
	$(".loadingScreen").fadeIn(300);
	return $http.get('http://staging.tangent.tngnt.co/api/employee/me/', {headers: { Authorization: ' Token ' + sessionStorage.getItem('accessToken')}})
         .success(function(data) {
         	$(".loadingScreen").fadeOut(300);
           return data;
         })
         .error(function(data) {
         	console.log("Could not retrieve data from: http://staging.tangent.tngnt.co/api/employee/me/ with Token : " + sessionStorage.getItem('accessToken') );
         	console.log(JSON.stringify(data));
         	$(".loadingScreen").fadeOut(300);
           return data;
         });
        
}]);
