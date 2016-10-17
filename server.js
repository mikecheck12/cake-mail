var express = require('express');
//var path = require('path');

var app = express();


app.use(express.static('index.html'));

app.get('/', function(req, res) {
  res.sendFile('index.html');
})

// app.get('/', function(req, res) {
//   res.use(express.static('index.html'));
// });

app.listen(3000, function() {
  console.log('Server listening on port 3000');
})