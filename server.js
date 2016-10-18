var express = require('express');
var mongoose = require('mongoose');
var path = require('path');

var dbURI = process.env.MONGODB_URI || 'mongosdb://localhost/cakemail';

mongoose.connect(dbURI);

var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), function() {
  console.log('Server running on port', app.get('port'));
});