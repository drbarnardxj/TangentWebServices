app.controller('dashController', ['$scope', '$routeParams', '$http',function($scope, $routeParams, $http) {
  
  
		$(".loadingScreen").fadeIn(300);	
		$http.get('http://staging.tangent.tngnt.co/api/employee/', {headers: { Authorization: ' Token ' + sessionStorage.getItem('accessToken')}})
         .success(function(data) {
           $scope.dash = data;
           $scope.dash.position = {}
           for (var key in $scope.dash){
           	
           }
         })
         .error(function(data) {
         	console.log("Could not retrieve data from: http://staging.tangent.tngnt.co/api/employee/ with Token : " + sessionStorage.getItem('accessToken') );
         	console.log(JSON.stringify(data));
           
         });
		$(".loadingScreen").fadeOut(300);

  
}]);