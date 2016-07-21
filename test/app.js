var app = angular.module('myApp',['ui.router']);

  app.directive('header', function() {
    return {
      restrict: 'A',
      templateUrl: 'html/header.html'
    };
  });

  app.directive('footer', function () {
    return {
      restrict: 'A',
      templateUrl: 'html/footer.html'
    };
  });

  app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    // For any unmatched url, send to /home
    $urlRouterProvider.otherwise("/home")

    $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'html/home.html'
            })

            .state('portfolio', {
                url: '/portfolio',
                templateUrl: 'html/portfolio.html'
            })

            .state('myblog', {
              url: '/myblog',
              templateUrl: 'html/myblog.html'
            })
  }]);
