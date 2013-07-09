var express = require('express');
var buf = new Buffer(16);
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(buf.toString(fs.readFileSync('./home/ubuntu/hw3/bitstarter/index.html')));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
