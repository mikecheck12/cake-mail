//orders.js
angular.module('cakeMail.orders', [])

.controller('OrdersController', function ($scope, Orders) {
 console.log('hello');
  $scope.data = {};

  $scope.getOrders = function() {
    console.log('function called in controller');
    Orders.allOrders()
    .then(function(resp) {
      console.log('resp in controller');
      $scope.data.orders = resp;
      console.log($scope.data.orders);
    });
  }
  $scope.getOrders();
});