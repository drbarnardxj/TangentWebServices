var app = angular.module('twsApp', ['ngRoute']);
function logOut(){
	sessionStorage.setItem('accessToken',null);
	document.location = sessionStorage.getItem('directoryPath') + "login.html";
}
app.config(function ($routeProvider) { 
	// Check for valid login token first ( provided that the token is always 40 characters long )
	// Using TRY incase the access token doesn't exist yet
	try {
		if (sessionStorage.getItem('accessToken').length === 40 ) {
			console.log("Token still valid");
			$routeProvider 
    			.when('/', { 
    				controller: 'dashController', 
    				templateUrl: 'App/views/dashboard.html' 
    			})
    			.when('/myprofile', { 
    				controller: 'myProfileController', 
    				templateUrl: 'App/views/myProfile.html' 
    			})
    			.when('/employees', { 
    				controller: 'employeesController', 
    				templateUrl: 'App/views/employees.html' 
    			})
    			.otherwise({ 
    				redirectTo: '/' 
    			});
		} else {
			console.log("Your session has expired or you haven't logged in yet.");
			document.location = sessionStorage.getItem('directoryPath') + "login.html";
		}
	} catch (error) {
		console.log("Invald access token");
	}
   
});
 

    
  app.controller('subNavController', function ($scope, $location) { 
    $scope.isActive = function (viewLocation) { 
      return viewLocation === $location.path();
    };
  });  
    
 
app.controller('TabController', function () {
    this.tab = 1;
	this.setTab = function (tabId) {
        this.tab = tabId;
    };
	this.isSet = function (tabId) {
        return this.tab === tabId;
    };
});
    
app.filter('reviewType', function(){
	return function(input){
		var output;
		switch (input) {
			case "P" : return "Performance Increase";
			case "S" : return "Starting Salary";
			case "A" : return "Annual Increase";
			case "E" : return "Expectation Review";
			default : return "Unknown";
		}	
	}
	
})    

app.filter('genderType', function(){
	return function(input){
		var output;
		switch (input) {
			case "M" : return "Male";
			case "F" : return "Female";
			default : return "Unknown";
		}	
	}
	
}) 

app.filter('raceType', function(){
	return function(input){
		var output;
		switch (input) {
			case "B" : return "Black African";
			case "C" : return "Coloured";
			case "I" : return "Indian or Asian";
			case "W" : return "White";
			case "N" : return "None Dominant";
			default : return "Unknown";
		}	
	}
	
}) 
app.filter('YesNo', function(){
	return function(input){
		var output;
		switch (input) {
			case true : return "Yes";
			default : return "No";
		}	
	}
	
})

