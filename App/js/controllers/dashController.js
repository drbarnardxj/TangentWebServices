//app.controller('dashController', function ($scope, $http, $location) {
    

//});

app.controller('dashController', ['$scope', 'dashboard', '$routeParams', function($scope, dashboard, $routeParams) {
  dashboard.success(function(data) {
   // $scope.detail = data[$routeParams.id];
   // console.log($scope.detail);
   
   
  });
}]);