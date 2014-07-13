var app, express;

express = require('express');

app = function() {
	var server;
	server = express();
	require('./server')(server);
};

module.exports = app;