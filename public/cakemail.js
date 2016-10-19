//main js file
angular.module('cakeMail', ['ngRoute', 'cakeMail.orders', 'cakeMail.services', 'cakeMail.tasters'])

.config(function($routeProvider) { //may need to add $httpProvider for auth
  $routeProvider
  .when('/orders', {
    templateUrl : '/orders/orders.html',
    controller: 'OrdersController'
  })
  .when('/tasters', {
    templateUrl : '/tasters/tasters.html',
    controller : 'TastersController'
  })
  .otherwise({
    redirectTo : '/home'
  });
});



