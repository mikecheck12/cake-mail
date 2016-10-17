var express = require('express');
var path = require('path');

var app = express();

app.set('port', 3000);

app.use(express.static(path.join(__dirname, 'public')));


// app.get('/', function(req, res) {
//   res.sendFile('index.html');
// })

// app.get('/', function(req, res) {
//   res.use(express.static('index.html'));
// });

app.listen(app.get('port'), function() {
  console.log('Server listening on port 3000');
})