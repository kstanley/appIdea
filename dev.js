var connect = require('connect');
var sassMiddleware = require('node-sass-middleware');

var srcPath = __dirname + '/sass';
var destPath = __dirname + '/public/stylesheets';

var serveStatic = require('serve-static')
var http = require('http');
var port = process.env.PORT || 8000;
var app = connect();
app.use('/stylesheets', sassMiddleware({
	src: srcPath,
	dest: destPath,
	debug: true,
	outputStyle: 'expanded'
}));
app.use('/',
	serveStatic('./public', {})
);
http.createServer(app).listen(port);
console.log('Server listening on port ' + port);
console.log('srcPath is ' + srcPath);
console.log('destPath is ' + destPath);







//var express = require('express');
//var path = require('path');
//var sassMiddleware = require('node-sass-middleware');
//var app = express();
//
//app.use(sassMiddleware({
//		/* Options */
//		src: path.join('sass', __dirname),
//		dest: path.join(__dirname, 'public/stylesheets')
//	}),
//	express.static(path.join(__dirname, 'public')));
//
//app.listen(4000, function () {
//	console.log("running server");
//});

////app.use(require("node-sass-middleware")({
////	src: __dirname,
////	dest: path.join(__dirname, 'public'),
////	debug: true,
////	indentedSyntax: true
////}));
//
//app.use(require("node-sass-middleware")({
//	src: path.join(__dirname, 'sass'),
//	dest: path.join(__dirname, 'public/stylesheets'),
//	debug: true,
//	indentedSyntax: true
//}));

//app.use(express.static(path.join(__dirname, 'public')));
