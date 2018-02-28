app.controller('loginController', function ($scope, $http) {
    
    $scope.data = {
        username: "default",
        password: "default"
    };
    
    $scope.getToken = function() {
    var	data = $scope.form;
    // ------------------------------------------------
    // This post type gives net::ERR_CONNECTION_REFUSED
    //-------------------------------------------------
    
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
     */
     
     //------------------------------------------------------
     // This post type also gives net::ERR_CONNECTION_REFUSED
     //------------------------------------------------------
     
     
     /*
        $http.post('http://staging.tangent.tngnt.co/api-token-auth/', JSON.stringify(data))
        .success(function(data){
        	console.log("logged in with token: " + data.token);
        	
        })
        .error(function(err){"ERR", console.log(err)
    	console.log($scope.form);
    });
    */ 
    
    //--------------------------------------------------------------------------------------------------
    // This post type worked on initial tests, but still gives net::ERR_CONNECTION_REFUSED on second try.
    // Could be cause system is registered as logged in on the API? GET request with token does succeed though.
    // Building Dashboard so long...
    
    $.ajax({
			method: "POST",
			url: "http://staging.tangent.tngnt.co/api-token-auth/",
			data: { 'username': $scope.form.username, 'password': $scope.form.password }
		})
		.done(function(data) {
			alert( "Token: " + data.token );
			sessionStorage.setItem('accessToken', data.token);
		});
    console.log($scope.form);
    };
});