//orders.js
var orders = angular.module('cakeMail.orders', [])

.controller('OrdersController', function ($scope, Orders) {

  $scope.data = {};

  $scope.getOrders = function() {
    Orders.getOrders()
  }
});