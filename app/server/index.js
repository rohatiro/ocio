var app,swig,express,path;

swig = require('swig');
express = require('express');
path = require('path');

var routes;

routes = require('./routes');

app = function(server) {
	var rootdir,viewsdir,assetsdir;

	rootdir = path.resolve(__dirname, '../..');
	viewsdir = path.resolve(rootdir, 'app/server/views');
	assetsdir = path.resolve(rootdir, 'app/client/assets');

	server.engine('html', swig.renderFile);
	server.set('view engine', 'html');
	server.set('views', viewsdir);

	server.use(express.static(assetsdir));

	routes(server);

	server.listen(8000);
};

module.exports = app;