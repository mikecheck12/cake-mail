//main js file
app = angular.module('cakeMail', ['ngRoute']);

app.config(function($routeProvider) { //may need to add $httpProvider for auth
  $routeProvider
  .when('/orders', {
    templateUrl : '/orders/orders.html',
    controller: 'OrderController'
  })
  .when('/tasters', {
    templateUrl : '/tasters/tasters.html',
    controller : 'TastersController'
  })
  .otherwise({
    redirectTo : '/home'
  });
});



