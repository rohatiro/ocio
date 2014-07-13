var express, server;

express = require('express');
server = express();

server.get('/', function(req, res) {
	res.send('success');
});

server.listen(8000);