// editing
// deleting
// showing

angular.module('shoppingCart')
	.controller('EditProductCtrl', ['$scope', '$routeParams', '$location', 'ProductService', function($scope, $routeParams, $location, ProductService) {
		$scope.product = ProductService.showProduct({ id: $routeParams.id });

		$scope.updateProduct = function() {
			ProductService.updateProduct($scope.product);
			$location.path('/inventory/' + $routeParams.id);
		};

		$scope.delete = function() {
			ProductService.deleteProduct({ id: $routeParams.id });
			$location.path('/inventory');
		};
	}]);