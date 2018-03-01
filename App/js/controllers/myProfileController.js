app.controller('myProfileController', ['$scope', 'myProfile', '$routeParams', function($scope, myProfile, $routeParams) {
  myProfile.success(function(data) {
    $scope.detail = data[$routeParams.id];
  });
}]);