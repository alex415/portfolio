var app = angular.module('portfolio', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/templates/about.html',
    controller: 'MainCtrl'
  })
  .when('/portfolio', {
    templateUrl: 'views/templates/portfolio.html',
    controller: 'MainCtrl'
  })
  .when('/contact', {
    templateUrl: 'views/templates/contact.html',
    controller: 'MainCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}]);

app.controller('MainCtrl', ['$scope', function ($scope) {
  
}]);