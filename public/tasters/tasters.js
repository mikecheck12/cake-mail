//tasters.js

var orders = angular.module('cakeMail.tasters', [])

.controller('TastersController', function ($scope, Tasters, $http) {
  $http({
      method: 'POST',
      url: '/api/orders',
      data: JSON.stringify({Hello: "Hi"})
    })
  $scope.order = {};

//refactor to be properties of order?? i.e. $scope.order.name


  $scope.addOrder = function() {
    Orders.addOrder($scope.order)
    //could use .then location path to reroute to thank you, order has been placed
  };

});






// .controller('TastersController', function () {

//   var order = this;

//   order.name = '';
//   order.addLine1 = '';
//   order.addLine2 = '';
//   order.city = '';
//   order.state = '';
//   order.zip = '';

//   order.orders = [];

//   order.addOrder = function() {
//     order.orders.push({
//       name: order.name,
//       address: order.addLine1 + order.addLine2,
//       city: order.city,
//       state: order.state,
//       zip: order.zip
//     });
//   };

// });



