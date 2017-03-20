var app = angular.module('myApp',['ui.router',
                                  'ngMessages',
                                  'ngMaps']);

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
      .state('showcase', {
        url: '/showcase',
        templateUrl: 'showcase.html',
        controller: 'CaseController'
      })
      // .state('showcaseId', {
      //   url: '/showcase/:showcaseId',
      //   templateUrl: 'showcaseId.html',
      //   controller: 'CaseController'
      // })
      .state('showcasefirst', {
        url: '/showcase/0',
        templateUrl: 'firstcase.html',
        controller: 'FirstCaseController'
      })
      .state('showcasesecond', {
        url: '/showcase/1',
        templateUrl: 'secondcase.html'
      })
  }]);

  app.controller('formController', function() {});

  app.controller('CaseController', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams) {
    $http.get('../list.json').then(function(response) {
      $scope.cases = response.data;
      // $scope.caseId = response.data[$stateParams.showcaseId];
    });
  }]);
