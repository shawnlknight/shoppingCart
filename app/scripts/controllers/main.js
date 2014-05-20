'use strict';

// var app = angular.module('shoppingCart')
//   .controller('MainCtrl', function ($scope) {
//     $scope.awesomeThings = [
//       'HTML5 Boilerplate',
//       'AngularJS',
//       'Karma'
//     ];
//     $scope.addAwesome = function(item) {
//     	$scope.awesomeThings.push(item);
//     };
//     $scope.anotherDataArr = [
//     	'this is something',
//     	'more stuff'
//     ];
//   });

// app.controller('demoController', function($scope) {
// 	$scope.demoData = [
// 		1,2,3,4,5
// 	]; 
// 	$scope.addData = function(number) {
// 		$scope.demoData.push(number);
// 	};
// });

angular.module('shoppingCart')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.addAwesome = function(item) {
    	$scope.awesomeThings.push(item);
    };
    $scope.anotherDataArr = [
    	'this is something',
    	'more stuff'
    ];
  })

.controller('productCtrl', function($scope) {
	$scope.products = [
		{
			'thumbnail': 'http://cdn.roguefitness.com/media/catalog/product/cache/1/small_image/193x193/4c971525e32ff444db0f0150e765d17f/m/-/m-bruiser-th-new.jpg',
			'name': 'Barbell',
			'price': 150.00,
			'description': 'American made steel olympic barbell. 45 lbs.'
		},
		{
			'thumbnail': 'http://cdn.roguefitness.com/media/catalog/product/cache/1/small_image/193x193/4c971525e32ff444db0f0150e765d17f/h/g/hg-bumpers-th-new.jpg',
			'name': 'Bumber Plate Package',
			'price': 500.00,
			'description': '400 total pounds of American Made bumper weight plates.'
		},
		{
			'thumbnail': 'http://cdn.roguefitness.com/media/catalog/product/cache/1/small_image/193x193/4c971525e32ff444db0f0150e765d17f/r/o/rogue-kettlebell-th.jpg',
			'name': 'Kettlebell',
			'price': 50.00,
			'description': 'American made 50 lb kettlebell.'
		},
		{
			'thumbnail': 'http://cdn.roguefitness.com/media/catalog/product/cache/1/small_image/193x193/4c971525e32ff444db0f0150e765d17f/s/r/sr-1-rogue-bearing-speed-rope-web-th1.jpg',
			'name': 'Speed Rope',
			'price': 20.00,
			'description': 'Speed jump rope. Perfect for double-unders!'
		}
		
	]; 
	// $scope.addData = function(number) {
	// 	$scope.demoData.push(number);
	// };
});



