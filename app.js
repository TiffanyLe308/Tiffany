(function() {
  var app = angular.module('myApp', []);

  app.controller('TabController', function() {
    this.tab = 1;
    this.selectedTab = function(setTab) {
      this.tab = setTab;
    };
    this.isSet = function(tabName) {
      return this.tab = tabName;
    };
  });

  app.directive('header', function() {
    return {
      restrict: 'A',
      templateUrl: 'header/header.html'
    };
  });
  
  app.directive('footer', function () {
    return {
      restrict: 'A',
      templateUrl: 'footer/footer.html'
    };
  });


})();
