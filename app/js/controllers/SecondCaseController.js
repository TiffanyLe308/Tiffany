app.controller("SecondCaseController", ['$scope', '$http', function($scope, $http) {
  $http.get('../../booklist.json').then(function(data) {
    $scope.books = data.data.products;
  });
}]);
