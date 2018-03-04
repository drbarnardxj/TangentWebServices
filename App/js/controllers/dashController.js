app.controller('dashController', ['$scope', '$routeParams', '$http',function($scope, $routeParams, $http) {

	$(".loadingScreen").fadeIn(300);
	$http.get('http://staging.tangent.tngnt.co/api/employee/me/', {headers: { Authorization: ' Token ' + sessionStorage.getItem('accessToken')}})
         .success(function(data) {
         	$scope.reviewDate = data.next_review;
         	$scope.birthDate = data.birth_date;
         })
	
	
	
	$http.get('http://staging.tangent.tngnt.co/api/employee/', {headers: { Authorization: ' Token ' + sessionStorage.getItem('accessToken')}})
        .success(function(data) {
        	var oneDay = 24*60*60*1000;
        	var d = new Date();
			var month = d.getMonth() + 1; // set current month to a usable int for later
			var reviewDate = $scope.reviewDate.split("-");
			var review = new Date(parseInt(reviewDate[0]),parseInt(reviewDate[1])-1,parseInt(reviewDate[2]));
			$scope.daysToReview = Math.round(Math.abs((d.getTime() - review.getTime())/(oneDay)));
			var birthDate = $scope.birthDate.split("-");
			var bDay = new Date(d.getFullYear(),parseInt(birthDate[1]),parseInt(birthDate[2]));
			$scope.daysToBirthDay = Math.round(Math.abs((d.getTime() - bDay.getTime())/(oneDay)));
			
			console.log("current year: " +d.getFullYear('YYYY'));
        	$scope.dash = data;
        	$scope.dashData = {staffTotal : 0, birthdaysTotals: 0, maleTotals : 0, femaleTotals : 0}
        	$scope.staffTotal = 0;
        	$scope.birthdaysTotals = 0;
        	$scope.maleTotals = 0;
        	$scope.femaleTotals = 0;
        	$scope.birthdayRecord = [];
        	$scope.positions = [];
            console.log("review: " + $scope.reviewDate);
        	for (var key in $scope.dash){
           		$scope.dashData.staffTotal++;
           		try {
           			$scope.positions[$scope.dash[key].position.name]++;
           		} catch(e) {
           			$scope.positions.push({name: $scope.dash[key].position.name, count : 1})
           		}
           		console.log($scope.dash[key].position.name);
           		if ($scope.dash[key].gender === "M"){ $scope.dashData.maleTotals++; } else { $scope.dashData.femaleTotals++; }
           		if (parseInt($scope.dash[key].birth_date.substr(5,2)) === month) {
           			$scope.dashData.birthdaysTotals++;
           			$scope.birthdayRecord.push($scope.dash[key])
           		} else {} // get birthdays for current month
        	}
        })
        .error(function(data) {
         	console.log("Could not retrieve data from: http://staging.tangent.tngnt.co/api/employee/ with Token : " + sessionStorage.getItem('accessToken') );
         	console.log(JSON.stringify(data));
           
        });
	$(".loadingScreen").fadeOut(300);

  
}]);