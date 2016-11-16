angular.module("jsonCreator", [])
	.controller("mainCtrl", function ($scope) {
		console.log("I am the main controller!");
		var myObj = {
			categories: {
				school: {
					math: {
						geometry: {
							isFun: true
						},
						algebra: {
							isFun: false
						},
						trig: {
							isFun: true
						}
					},
					reading: {
						theGreatGatsby: {
							isFun: false
						},
						ender: {
							isFun: true
						}
					}
				},
				games: {
					videoGames: {
						Halo: {
							isFun: true
						},
						cod: {
							isFun: false
						}
					},
					boardGames: {
						chess: {
							isFun: true
						}
					}
				}

			}
		};
		// first category array
		var category = ['var1', 'var2', 'var3'];
		// subcategory array
		var subCategory = ['var1', 'var2', 'var3'];
		var minutes = [];
		for (var i = 0; i < 60; i += 5) {
			minutes.push(i);
		}
		// enable ng options to access categories
		$scope.category = category;
		$scope.subCategory = subCategory;
		$scope.hour = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
		$scope.minute = minutes;
		$scope.min = $scope.minute[0];
		$scope.hou = $scope.hour[0];
		// array to detirmin were to access information from
		var query = ['categories'];


		// change querry based on dropdown selected
		$scope.categoryChange = function (cat) {
			if (cat === 1) {

			} else if (cat === 2) {

			}
		}

		// function to trim the querry back down to size.
		function setQuery(desiredLength) {
			var numToRemove = query.length - desiredLength;
			for (var i = 0; i < numToRemove; i++) {
				query.pop();
			}
		}

		// function to update category
		function getProperty(obj, dest) {
			var len = dest.length;
			for (var i = 0; i < len; i++) {
				dest.pop();
			}
			for (var prop in obj) {
				dest.push(prop);
			}
		}
		getProperty(myObj.categories, category);
		// end controller
	})


/*
	Notes

	ng-value for recording values

	ng-class to change the class of an element



ng-model
*/
