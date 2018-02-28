app.controller('loginController', function ($scope, $http) {
    
    $scope.data = {
        //username: "default",
       // password: "default"
    };
    
    $scope.getToken = function() {
    var	data = $scope.form;
    /*	
        console.log("posting data....");
        $http({

        url: "http://staging.tangent.tngnt.co/api-token-auth/",
        data: $scope.form,
        method: 'POST',
        headers : {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}

    }).success(function(data){

        console.log("OK", data)

    }).error(function(err){"ERR", console.log(err)
    	console.log($scope.form);
    })
        
        
       
        
        
        
        $http.post('http://staging.tangent.tngnt.co/api-token-auth/', JSON.stringify(data))
        .success(function(data){
        	console.log("logged in with token: " + data.token);
        	
        })
        .error(function(err){"ERR", console.log(err)
    	console.log($scope.form);
    });
    */ 
    
    $.ajax({
			method: "POST",
			url: "http://staging.tangent.tngnt.co/api-token-auth/",
			data: { 'username': $scope.form.username, 'password': $scope.form.password }
		})
		.done(function(data) {
			alert( "Token: " + data.token );
		});
    console.log($scope.form);
    };
});