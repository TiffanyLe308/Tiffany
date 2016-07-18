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
});
