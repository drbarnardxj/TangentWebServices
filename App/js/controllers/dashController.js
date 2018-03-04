app.controller('dashController', ['$scope', '$routeParams', '$http',function($scope, $routeParams, $http) {
	
	var oneDay = 24*60*60*1000;
    var d = new Date();
	var month = d.getMonth() + 1; // set current month to a usable int for later
	$scope.dashData = {
		staffTotal : 0, 
		birthdaysTotals: 0, 
		maleTotals : 0, 
		femaleTotals : 0, 
		positions : {'Front-end Developer' : 0, 'Back-end Developer' : 0, 'Project Manager' : 0},
		race : {'Front-end Developer' : 0, 'Back-end Developer' : 0, 'Project Manager' : 0}
	}
	$scope.charts = {
		positions :{labels : [], data : [], options: {legend: {display : true} }},
		gender :{labels : [], data : [], options: {legend: {display : true} }},
		race :{labels : [], data : [], options: {legend: {display : true} }}
	};
	
	$(".loadingScreen").fadeIn(300);
	
	$http.get('http://staging.tangent.tngnt.co/api/employee/me/', {headers: { Authorization: ' Token ' + sessionStorage.getItem('accessToken')}})
         .success(function(data) {
         	$scope.reviewDate = data.next_review;
         	$scope.birthDate = data.birth_date;
         })

	$http.get('http://staging.tangent.tngnt.co/api/employee/', {headers: { Authorization: ' Token ' + sessionStorage.getItem('accessToken')}})
        .success(function(data) {
        	
			var reviewDate = $scope.reviewDate.split("-");
			var review = new Date(parseInt(reviewDate[0]),parseInt(reviewDate[1])-1,parseInt(reviewDate[2]));
			$scope.daysToReview = Math.floor(review.getTime()/oneDay) - Math.floor(d.getTime()/oneDay)
			var birthDate = $scope.birthDate.split("-");
			var bDay = new Date(d.getFullYear(),parseInt(birthDate[1]),parseInt(birthDate[2]));
			$scope.daysToBirthDay = Math.round(Math.abs((d.getTime() - bDay.getTime())/(oneDay)));
			
        	$scope.dash = data;
        	
        	$scope.birthdayRecord = [];
            console.log("review: " + $scope.reviewDate);
        	for (var key in $scope.dash){
           		$scope.dashData.staffTotal++;
           	
           		// This method needs to be rewritten as it does not make provision for new positions in the database
           		switch($scope.dash[key].position.id){
           			case 1 : $scope.dashData.positions['Front-end Developer']++; break;
           			case 2 : $scope.dashData.positions['Back-end Developer']++; break;
           			case 3 : $scope.dashData.positions['Project Manager']++; break;
           		}
           		
           		
           		if ($scope.dash[key].gender === "M"){ $scope.dashData.maleTotals++; } else { $scope.dashData.femaleTotals++; }
           		if (parseInt($scope.dash[key].birth_date.substr(5,2)) === month) {
           			$scope.dashData.birthdaysTotals++;
           			$scope.birthdayRecord.push($scope.dash[key])
           		} else {} // get birthdays for current month
        	}
        	
        	$scope.charts.positions.labels = ["Front-end Developer", "Back-end Developer", "Project Manager"];
			$scope.charts.positions.data = [$scope.dashData.positions['Front-end Developer'], $scope.dashData.positions['Back-end Developer'], $scope.dashData.positions['Project Manager']];
			$scope.charts.gender.labels = ["Male", "Female"];
			$scope.charts.gender.data = [$scope.dashData.maleTotals, $scope.dashData.femaleTotals];
        })
        .error(function(data) {
         	console.log("Could not retrieve data from: http://staging.tangent.tngnt.co/api/employee/ with Token : " + sessionStorage.getItem('accessToken') );
         	console.log(JSON.stringify(data));
           
        });
	$(".loadingScreen").fadeOut(300);
 
  
}]);
