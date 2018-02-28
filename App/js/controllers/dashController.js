app.controller('dashController', ['$scope', 'dashboard', function($scope, photos) {
  dashboard.success(function(data) {
    $scope.dashboard = data;
  });
}]);