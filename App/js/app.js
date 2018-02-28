var app = angular.module('twsApp', ['ngRoute']);

app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      controller: 'dashController', 
      templateUrl: 'App/views/dashboard.html' 
    })
    .when('/myprofile', { 
      controller: 'myProfileController', 
      templateUrl: 'App/views/dashboard.html' 
    })
    .otherwise({ 
      redirectTo: '/' 
    }); 
});
 
app.controller('dashController', ['$scope', 'dashboard', function($scope,  $routeParams) {
  dashboard.success(function(data) {
    $scope.dashboard = data;
  });
}]);