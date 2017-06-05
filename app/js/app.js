var app = angular.module('myApp',['ui.router',
                                  'ngMessages',
                                  'ngMaps',
                                  'ngAnimate',
                                  'ui.bootstrap']);

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
      templateUrl: 'secondcase.html',
      controller: 'SecondCaseController'
    })
    .state('showcasethird', {
      url: '/showcase/2',
      templateUrl: 'thirdcase.html',
      controller: 'ThirdCaseController'
    })
}]);

app.controller('formController', function() {});

app.controller('CaseController', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams) {
  $http.get('../list.json').then(function(response) {
    $scope.cases = response.data;
    // $scope.caseId = response.data[$stateParams.showcaseId];
  });
}]);

app.directive('scrollOnClick', function() {
  return {
    restrict: 'A',
    link: function(scope, $elm, attrs) {
      var idToScroll = attrs.href;
      $elm.on('click', function() {
        var $target;
        if (idToScroll) {
          $target = $(idToScroll);
        } else {
          $target = $elm;
        }
        $("html, body").animate({scrollTop: 0}, "slow");
      });
    }
  }
});
