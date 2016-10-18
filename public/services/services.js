angular.module('cakeMail.services', [])

.factory('Orders', function($http) {

  var getOrders = function() {
    return $http({
      method: 'GET',
      url: '/api/orders'
    })
    .then(function(resp) {
      return resp.data;
    });
  };

  var addOrder = function(order) {
    return $http({
      method: 'POST',
      url: '/api/orders',
      data: JSON.stringify(order);
    })
    .then(function(resp) {
      return resp.data;
    });
  };
  return {
    getOrders: getOrders,
    addOrder: addOrder
  };
})