angular.module("jsonCreator", ['inputDropdown'])
	.controller("mainCtrl", ['$scope', '$q', function ($scope, $q) {
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
		// dropdown test
		var self = this;

		self.countryString = []; // Holds the selected in demoFormStrings, set with attribute 'selected-item'

		// Pass strings to the dropdown for simple usage
		self.defaultDropdownStrings = [
          ['China',
          'Sweden',
          'United Kingdom',
          'United States'
        ], ['test']];


		// Filter method is passed with attribute 'filter-list-method="method(userInput)"'.
		// Called on the onchange event from the input field. Should return a promise resolving with an array of items to show in the dropdown.
		// If no filter method is passed to the the directive, the default dropdown will show constantly.
		self.filterStringList = function (userInput, position) {
			//lastUserStringInput = userInput;lastUserStringInput
			self.countryString[position] = userInput;
			var filter = $q.defer();
			var normalisedInput = userInput.toLowerCase();


			var filteredArray = self.defaultDropdownStrings[position].filter(function (country) {
				return country.toLowerCase().indexOf(normalisedInput) === 0;
			});

			filter.resolve(filteredArray);
			return filter.promise;
		};

		self.filterObjectList = function (userInput) {
			var filter = $q.defer();
			var normalisedInput = userInput.toLowerCase();
			var filteredArray = self.defaultDropdownObjects.filter(function (country) {
				var matchCountryName = country.readableName.toLowerCase().indexOf(normalisedInput) === 0;
				var matchCountryCode = country.countryCode.toLowerCase().indexOf(normalisedInput) === 0;
				return matchCountryName || matchCountryCode;
			});

			filter.resolve(filteredArray);
			return filter.promise;
		};


		// Called when user selected an item from dropdown. Passed with attribute 'item-selected-method="method(item)"'.
		self.itemStringSelected = function (item) {
			console.log('Handle item string selected in controller:', item);
			self.stringMessage = 'String item selected: ' + item;
		};

		self.itemObjectSelected = function (item) {
			console.log('Handle item object selected in controller:', item);
			self.objectMessage = 'Object item selected: ' + item;
		};


		self.submitFormStrings = function () {
			if ($scope.demoFormStrings.$valid) {
				// If the user has selected something from the dropdown, the value will be stored in self.countryString.
				// If they haven't and we set allowCustomInput=true, we can grab the input value
				// from lastUserStringInput which we set in filterStringList().
				// There are probably better ways to grab the current value from the input field, this is just a quick example.
				var country = self.countryString || lastUserStringInput;
				console.log('Submit form STRINGS with country:', country);
			}
		};

		self.submitFormObjects = function () {
			if ($scope.demoFormObjects.$valid) {
				console.log('Submit form OBJECTS with country:', self.countryObject);
				self.objectMessage = 'Submit form OBJECT with country: ' + self.countryObject;
			}
		};


		// end dropdown test
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

		};

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
		// test code for dropdown
		// end test code for dropdown

		// end controller
	}])



/*
	Notes

	ng-value for recording values

	ng-class to change the class of an element

for input dropdown problems
	https://github.com/hannaholl/angular-input-dropdown#3-create-a-controller-to-handle-the-data-for-the-input

ng-model
*/
