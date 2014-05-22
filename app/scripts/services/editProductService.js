// edit a single product
// delete a single product
// show a single product

angular.module('shoppingCart')
	.factory('ProductService', function($resource) {
		return $resource('http://tiy-fee-rest.herokuapp.com/collections/shawnCart/:id',
			{
				id: '@_id'
			},
			{
				showProduct: { method: 'GET' },
				updateProduct: { method: 'PUT' },
				deleteProduct: { method: 'DELETE' }
			});
	});