app.controller("SecondCaseController", ['$scope', '$http', function($scope, $http) {
  $http.get('../../booklist.json').then(function(data) {
    $scope.books = data.data.products;
  });

  $scope.myCart = [];
  $scope.addItem = function(book) {
    $scope.books.push(book);
    $scope.book = {};
  };

  $scope.addToCart = function(book) {
    $scope.myCart.push(angular.copy(book));
    $scope.amount += book.price;
  };

  $scope.getTotal = function(){
    var total = 0;
    for(var i = 0; i < $scope.myCart.length; i++){
        var book = $scope.myCart[i];
        total += book.price;
    }
    return total;
  };
}]);
