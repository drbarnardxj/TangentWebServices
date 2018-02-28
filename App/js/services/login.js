app.factory('login', ['$http', function($http) {
  return $http.post('http://staging.tangent.tngnt.co/api-token-auth/')
         .success(function(data) {
           return data;
         })
         .error(function(data) {
           return data;
         });
}]);