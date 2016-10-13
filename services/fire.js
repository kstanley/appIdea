var firebase = require('firebase');
var credentials = require('./credentials');
var fire = require("../routes/api/APIindex");
var firedb = require("./fire");

var app = credentials.info;

var db = firebase.database();
var ref = db.ref("users");

//this
//function will stay connected to firebase and write back all changes made

//ref.on("value", function (snapshot) {
//	console.log("success " + snapshot.val());
//}, function (errorObject) {
//	console.log("The read failed: " + errorObject.code);
//});
//
//
//ref2.on("value", function (snapshot) {
//	console.log(snapshot.val());
//}, function (errorObject) {
//	console.log("The read failed: " + errorObject.code);
//});
//
//var usersRef = ref.child("users");
//usersRef.push({
//	alanblank: {
//		date_of_birth: "June 23, 1912",
//		full_name: "Alan Turing"
//	},
//	gracehop: {
//		date_of_birth: "December 9, 1906",
//		full_name: "Grace Hopper"
//	}
//});


//ref2.set("I'm writing data", function (error) {
//	if (error) {
//		console.log("Data could not be saved." + error);
//	} else {
//		console.log("Data saved successfully.");
//	}
//});


// code to verify firebase tokens

// idToken comes from the client app (shown above)



module.exports.getUid = function (idToken, success) {
	var uid = null;
	console.log("id token: " + idToken);
	firebase.auth().verifyIdToken(idToken).then(function (decodedToken) {
			uid = decodedToken.sub;
			console.log("getUid");
			console.log("validation success " + uid);
			if (uid !== null) {
				success(uid);
			}
		})
		.catch(function (error) {
			// Handle error
			console.log(error);
		});
};


module.exports.createUser = function (uid, successful) {
	console.log("create user");
	// access the database
	// define path to data
	var usersRef = ref.child(uid);
	// function to retrieve data once
	var getData = function () {
		usersRef.once("value", function (data) {
			usersRef.on("value", function (snapshot) {
				data = snapshot.val();
				if (data === null) {
					// create user object
					usersRef.set({
						test: "this is a test"
					});
					getData;
					// ...
				} else if (data) {
					console.log("this is the data: " + data);
					successful(data);
				} else {
					console.log("get data else ran");
				}

			}, function (errorObject) {
				console.log("The read failed: " + errorObject.code);
				successful("there was an error");
			});
		});
	};
	getData();
};


module.exports.testData = function (success) {
	console.log("get testData");
	var data = "this is a test";
	return data;
};


//// create user object
//		usersRef.set({
//			test: "this is a test"
//		});
//		// ...

//// read data
//		usersRef.on("value", function (snapshot) {
//			console.log(snapshot.val());
//		}, function (errorObject) {
//			console.log("The read failed: " + errorObject.code);
//		});

/*
ref.once("value", function(snapshot) {
  console.log(snapshot.val());
	console.log("done");
});
*/




/* possibly need google cloud
//require('firebase/database');

var gcloud = require('gcloud')({
	projectId: "myfinancialapp",
	keyFilename: '/credentials.json'
});
var gcs = gcloud.storage();
var bucket = gcs.bucket('myfinancialapp.appspot.com');



var nsRecord = gcs.record('ns', {
  ttl: 86400,
  name: 'my-domain.com.',
  data: 'ns-cloud1.googledomains.com.'
});

*/






/*

var dataRef = new Firebase('https://myfinancialapp.firebaseio.com/');
dataRef.set("hello world!");

var FirebaseTokenGenerator = require("firebase-token-generator");
var tokenGenerator = new FirebaseTokenGenerator(YOUR_FIREBASE_SECRET);
var token = tokenGenerator.createToken({uid: "1", some: "arbitrary", data: "here"});



require('firebase/database');

var gcloud = require('gcloud');
var gcs = gcloud.storage();
var bucket = gcs.bucket('myfinancialapp.appspot.com');



var app = firebase.intializeApp({
 apiKey: "AIzaSyA7ngrMaz3RyEdRdYTTcR2m4lZhKp_6QVQ",
 authDomain: "myfinancialapp.firebaseapp.com",
 databaseURL: "https://myfinancialapp.firebaseio.com",
 storageBucket: "myfinancialapp.appspot.commyfinancialapp.appspot.com",
});
*/
