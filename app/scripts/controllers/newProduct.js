angular.module('shoppingCart')
	.controller('ProductCtrl', ['$scope', '$location', 'NewProductService', function($scope, $location, NewProductService) {
		$scope.products = NewProductService.getAllProducts();
		$scope.addProduct = function() {
			$location.path('/new');
		};
		$scope.createProduct = function(product) {
			NewProductService.createNewProduct(product);
			$location.path('/inventory');
		};
	}]);