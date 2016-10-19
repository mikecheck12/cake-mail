angular.module('cakeMail.services', [])

.factory('Orders', function($http) {

  var allOrders = function() {
    return $http({
      method: 'GET',
      url: '/api/orders'
    })
    .then(function(resp) {
      return resp.data;
    });
  };

  var addOrder = function(order) {
    console.log('service add Order');
    return $http({
      method: 'POST',
      url: '/api/orders',
      data: JSON.stringify(order)
    })
    .then(function(resp) {
      return resp.data;
    });
  };
  return {
    allOrders: allOrders,
    addOrder: addOrder
  };
})