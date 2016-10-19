//tasters.js

angular.module('cakeMail.tasters', [])

.controller('TastersController', function ($scope, Orders, $http) {

  $scope.order = {};

  $scope.addOrder = function() {
    console.log('controller function');
    Orders.addOrder($scope.order)
    //could use .then location path to reroute to thank you, order has been placed
  };

});
