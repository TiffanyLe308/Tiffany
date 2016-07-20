(function() {
  console.log('abc');
  var app = angular.module('myApp', []);

  app.controller('TabController', function(){
    this.tab = 1;

    this.setTab = function(newValue){
      this.tab = newValue;
    };

    this.isSet = function(tabName){
      return this.tab === tabName;
    };
  });

  app.directive('header', function() {
    return {
      restrict: 'A',
      templateUrl: 'html/header.html'
    };
  });

  app.directive('introduction', function() {
    return {
      restrict: 'A',
      templateUrl: 'html/introduction.html'
    };
  });

  app.directive('footer', function () {
    return {
      restrict: 'A',
      templateUrl: 'html/footer.html'
    };
  });

  app.config(['$stateProvider', function($stateProvider) {
    $stateProvider
      .state('home',
        url: '/home',
        templateUrl: 'home.html'
      )
  }]);

  // app.config(['$stateProvider', function($stateProvider) {
  //   $stateProvider
  //     .state('home',
  //       url: '/home',
  //       templateUrl: 'home.html'
  //     )
  //     .state('myblog',
  //       url: '/myblog',
  //       templateUrl: 'myblog.html'
  //     )
  //     .state('contact',
  //       url: '/contact',
  //       templateUrl: 'contact.html'
  //     );
  // }]);

})();
