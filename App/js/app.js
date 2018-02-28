var app = angular.module('twsApp', ['ngRoute']);

app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      controller: 'loginController', 
      templateUrl: 'App/views/login.html' 
    })
    .when('/dashboard/', { 
      controller: 'dashController', 
      templateUrl: 'App/views/dashboard.html' 
    })
    .otherwise({ 
      redirectTo: '/' 
    }); 
});
 
