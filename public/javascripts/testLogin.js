angular.module("testing", [])
	.controller('mainCtrl', function ($scope, $http) {
		$scope.options = ['var1', 'var2', 'var3'];
	});
