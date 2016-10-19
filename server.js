var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var bodyParser = require('body-parser');

require('./models/orders/ordersModel');
var Order = mongoose.model('Order');


var dbURI = process.env.MONGODB_URI || 'mongodb://localhost/cakemail';

mongoose.connect(dbURI);

var app = express();

app.use(bodyParser.json());

app.set('port', (process.env.PORT || 5000));

app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), function() {
  console.log('Server running on port', app.get('port'));
});

//handle get & post requests
app.get('/api/orders', function(req, res){
  console.log('starting get request');
  Order.find(function(err, orders) {
    res.json(orders);
  })
  //Order.find({}, )
})

app.post('/api/orders', function(req, res) {
  console.log('starting post request', req.body);

  //var newOrder = req.body;

  var order = new Order(req.body);
  order.save(function(err, order) {
    res.send(order);
  })
})