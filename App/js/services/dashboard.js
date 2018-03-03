app.factory('dashboard', ['$http', function($http) {
	console.log(sessionStorage.getItem('accessToken'));
	
	
  return $http.get('http://staging.tangent.tngnt.co/api/user/me/?Token=2a3d1af2f3f6d1cddaa3012c1c465fcbdffa3678')
         .success(function(data) {
         	console.log("success: " + JSON.stringify(data));
           return data;
         })
         .error(function(data) {
         	console.log("failed: " + data);
           return data;
         });
        
        
        
         
}]);
