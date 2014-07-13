var app,swig,express,path;

swig = require('swig');
express = require('express');
path = require('path');

app = function(server) {
	var rootdir,viewsdir,assetsdir;

	rootdir = path.resolve(__dirname, '../..');
	viewsdir = path.resolve(rootdir, 'app/server/views');
	assetsdir = path.resolve(rootdir, 'app/client/assets');

	server.engine('html', swig.renderFile);
	server.set('view engine', 'html');
	server.set('views', viewsdir);

	server.use(express.static(assetsdir));

	server.get('/', function(req, res) {
		res.render('index');
	});

	server.listen(8000);
};

module.exports = app;