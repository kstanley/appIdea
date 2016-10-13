angular.module("login", [])

.controller('mainCtrl', function ($scope, $http) {
	console.log("I am the main controller");
	// initialize variables

	// firebase configeration
	var config = {
		apiKey: "AIzaSyD1I6YG8Axudc6EBxUuBPz68BZb1sKnCy8",
		authDomain: "learning-planner.firebaseapp.com",
		databaseURL: "https://learning-planner.firebaseio.com",
		storageBucket: "learning-planner.appspot.com",
		messagingSenderId: "818084639155"
	};

	var userCreated = false;

	// start app
	firebase.initializeApp(config);


	// sign out
	$scope.signOut = function () {
		firebase.auth().signOut().then(function () {
			// console.log(email + " " + "successfully signed out");
			if (user) {
				console.log("user still signed on");
			}
		}, function (error) {
			// An error happened.
		});
	};


	// test if and when a user is signed in, will update on sign in
	// get token if signed in
	firebase.auth().onAuthStateChanged(function (user) {
		if (user) {
			console.log("user signed in with email " + user.email);

			// grab token
			firebase.auth().currentUser.getToken().then(function (idToken) {
				// Send token to your backend via HTTPS
				// ...
				userToken = {
					"idToken": idToken
				};



				$http.post('http://localhost:3000/api/user', userToken, config)
					.success(function (data, status, headers, config) {
						$scope.PostDataResponse = data;
						console.log(data);
					})
					.error(function (data, status, header, config) {
						$scope.ResponseDetails = "Data: " + data +
							"<hr />status: " + status +
							"<hr />headers: " + header +
							"<hr />config: " + config;
					});
				//console.log("get token " + idToken);
				//console.log(user.uid);
				//console.log(user.email);
			});

		} else {
			console.log("user not signed in");
		}
	});


	// google sign in
	var provider = new firebase.auth.GoogleAuthProvider();

	$scope.googleSignIn = function () {
		firebase.auth().signInWithRedirect(provider);
	};

	firebase.auth().getRedirectResult().then(function (result) {
		if (result.credential) {
			// This gives you a Google Access Token. You can use it to access the Google API.
			var token = result.credential.accessToken;
			// ...
		}
		// The signed-in user info.
		var user = result.user;
	}).catch(function (error) {
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;
		// The email of the user's account used.
		var email = error.email;
		// The firebase.auth.AuthCredential type that was used.
		var credential = error.credential;
		// ...
	});


	// forgotten password
	$scope.forgotPassword = function () {
		var auth = firebase.auth();
		var emailAddress = $scope.forgotPass;
		console.log(emailAddress);
		auth.sendPasswordResetEmail(emailAddress).then(function () {
			console.log("email sent");
		}, function (error) {
			console.log(error);
		});
	};

	// end main controller
});

// sample function for http

//	$scope.createUser = function () {
//		var data = {
//			email: $scope.email,
//			password: $scope.password
//				//,password: $scope.password
//		}
//		var config = {}
//
//		$http.post('http://localhost:3000/api/user', data, config)
//			.success(function (data, status, headers, config) {
//				$scope.PostDataResponse = data;
//			})
//			.error(function (data, status, header, config) {
//				$scope.ResponseDetails = "Data: " + data +
//					"<hr />status: " + status +
//					"<hr />headers: " + header +
//					"<hr />config: " + config;
//			});
//	};
