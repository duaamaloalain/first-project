// var mongoose = require('mongoose');
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var port = process.env.PORT || 1234;



//=============================================================================
/*								database							     	 */
//=============================================================================
	// var mongoURI = process.env.MONGODB_URI ||'mongodb://localhost/firstprojectdb';
	// mongoose.connect(mongoURI);
	// db = mongoose.connection;
	// db.once('open',function () {
	// 	console.log('mongoDB is open');
	// });


//=============================================================================
/*								server   							     	 */
//=============================================================================
	app.listen(port)
	// 
	app.use(express.static(__dirname+"/client"))