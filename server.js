var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var bodyParser = require('body-parser');

require('./models/Orders/ordersModel.js');
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
  Order.find(function(err, orders) {
    res.json(orders);
  })
})

app.post('/api/orders', function(req, res) {
  var order = new Order(req.body);
  order.save(function(err, order) {
    res.send(order);
  })
})