var express = require('express');
var firedb = require('../../services/fire');
var path = require('path');
var APIrouter = express.Router();

APIrouter.post('/user', function (req, res) {
	// create send function
	var send = function (data) {
		res.send(data);
	};


	// define success
	var Uidsuccess = function (userId) {
		console.log("fire uid success");
		firedb.createUser(userId, send);
	}

	firedb.getUid(req.body.idToken, Uidsuccess);
	//	var data = firedb.testData();
	//	console.log(data);
});

module.exports = APIrouter;
