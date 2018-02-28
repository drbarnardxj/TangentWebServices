app.factory('dashboard', ['$http', function($http) {
  return $http.get('http://staging.tangent.tngnt.co/api/user/me/')
         .success(function(data) {
           return data;
         })
         .error(function(data) {
           return data;
         });
}]);