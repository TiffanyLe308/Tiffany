var app = angular.module('myApp',['ui.router',
                                  'ngMessages']);

  app.directive('header', function() {
    return {
      restrict: 'A',
      templateUrl: 'header.html'
    };
  });

  app.directive('footer', function () {
    return {
      restrict: 'A',
      templateUrl: 'footer.html'
    };
  });

  app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    // For any unmatched url, send to /home
    $urlRouterProvider.otherwise("/home")

    $stateProvider
      .state('home', {
          url: '/home',
          templateUrl: 'home.html'
      })

      .state('portfolio', {
          url: '/portfolio',
          templateUrl: 'portfolio.html',
          controller: 'PortfolioController'
      })

      .state('myblog', {
        url: '/myblog',
        templateUrl: 'myblog.html'
      })
  }]);

  app.controller('formController', function() {});
