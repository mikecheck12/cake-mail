var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var orders = require('./Models/Orders/ordersModel');
var bodyParser = require('body-parser');

var dbURI = process.env.MONGODB_URI || 'mongodb://localhost/cakemail';

mongoose.connect(dbURI);

var app = express();

app.use(bodyParser.json());

app.set('port', (process.env.PORT || 5000));

app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), function() {
  console.log('Server running on port', app.get('port'));
});

app.get('/api/orders', function(req, res){

})

app.post('/api/orders', function(req, res) {
  console.log(req.body);
})