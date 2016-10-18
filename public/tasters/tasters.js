//tasters.js
var orders = angular.module('cakeMail.tasters', [])

// refactor once db is added
// .controller('TastersController', function ($scope, Tasters) {
//   $scope.name = '';
//   $scope.addLine1 = '';
//   $scope.addLine2 = '';
//   $scope.city = '';
//   $scope.state = '';
//   $scope.zip = '';

//   $scope.addOrder = function() {

//   }

// });


.controller('TastersController', function () {

  var order = this;

  order.name = '';
  order.addLine1 = '';
  order.addLine2 = '';
  order.city = '';
  order.state = '';
  order.zip = '';

  order.orders = [];

  order.addOrder = function() {
    order.orders.push({
      name: order.name,
      address: order.addLine1 + order.addLine2,
      city: order.city,
      state: order.state,
      zip: order.zip
    });
  };

});