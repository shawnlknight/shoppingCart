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

var app = angular.module('shoppingCart')
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
  });

app.controller('productCtrl', function($scope) {
	$scope.products = [
		{
			'thumbnail': 'http://cdn.roguefitness.com/media/catalog/product/cache/1/small_image/193x193/4c971525e32ff444db0f0150e765d17f/m/-/m-bruiser-th-new.jpg',
			'pic': 'http://cdn.roguefitness.com/media/catalog/product/cache/1/header_image/0dc2d03fe217f8c83829496872af24a0/r/o/rogue-bruiser-bar-web-h1.jpg',
			'name': 'Barbell',
			'price': 150.00,
			'description': 'American made steel olympic barbell. 45 lbs.',
			'reviews': [
				{
					stars: 5,
					body: "Best bar on the market!",
					author: "johnSmith@something.com"
				}

			]
		},
		{
			'thumbnail': 'http://cdn.roguefitness.com/media/catalog/product/cache/1/small_image/193x193/4c971525e32ff444db0f0150e765d17f/h/g/hg-bumpers-th-new.jpg',
			'pic': 'http://cdn.roguefitness.com/media/catalog/product/cache/1/header_sm_image/0dc2d03fe217f8c83829496872af24a0/h/g/hg3ships.jpg',
			'name': 'Bumber Plate Package',
			'price': 500.00,
			'description': '400 total pounds of American Made bumper weight plates.'
		},
		{
			'thumbnail': 'http://cdn.roguefitness.com/media/catalog/product/cache/1/small_image/193x193/4c971525e32ff444db0f0150e765d17f/r/o/rogue-kettlebell-th.jpg',
			'pic': 'http://cdn.roguefitness.com/media/catalog/product/cache/1/header_sm_image/0dc2d03fe217f8c83829496872af24a0/1/2/121-rogue-kettlebell-web-h1.jpg',
			'name': 'Kettlebell',
			'price': 50.00,
			'description': 'American made 50 lb kettlebell.'
		},
		{
			'thumbnail': 'http://cdn.roguefitness.com/media/catalog/product/cache/1/small_image/193x193/4c971525e32ff444db0f0150e765d17f/s/r/sr-1-rogue-bearing-speed-rope-web-th1.jpg',
			'pic': 'http://cdn.roguefitness.com/media/catalog/product/cache/1/qv_header/0dc2d03fe217f8c83829496872af24a0/s/r/sr-1s-short-handle-bearing-speed-rope-web-h1.jpg',
			'name': 'Speed Rope',
			'price': 20.00,
			'description': 'Speed jump rope. Perfect for double-unders!'
		}
		
	]; 
	// $scope.addData = function(number) {
	// 	$scope.demoData.push(number);
	// };
});

app.controller("PanelController", function() {
	this.tab = 0;

	this.selectTab = function(setTab) {
		this.tab = setTab;
	};
	this.isSelected = function(checkTab) {
		return this.tab === checkTab;
	};
});



