// get all products
// create a product

angular.module('shoppingCart')
	.factory('NewProductService', function($resource) {
		return $resource('http://tiy-fee-rest.herokuapp.com/collections/shawnCart', {}, 
			{
				getAllProducts: {
					method: 'GET',
					isArray: true
				},
				createNewProduct: {
					method: 'POST'
				}
			});
	});