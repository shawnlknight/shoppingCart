'use strict';

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
	$scope.reviews = {};
	$scope.products = [
		{
			'thumbnail': 'http://cdn.roguefitness.com/media/catalog/product/cache/1/small_image/193x193/4c971525e32ff444db0f0150e765d17f/m/-/m-bruiser-th-new.jpg',
			'pic': 'http://cdn.roguefitness.com/media/catalog/product/cache/1/header_image/0dc2d03fe217f8c83829496872af24a0/r/o/rogue-bruiser-bar-web-h1.jpg',
			'name': 'Olympic Barbell',
			'price': 150.00,
			'description': 'American made steel olympic barbell. 45 lbs. Tough enough for any workout.',
			'reviews': [],
			_id: 0
		},
		{
			'thumbnail': 'http://cdn.roguefitness.com/media/catalog/product/cache/1/small_image/193x193/4c971525e32ff444db0f0150e765d17f/h/g/hg-bumpers-th-new.jpg',
			'pic': 'http://cdn.roguefitness.com/media/catalog/product/cache/1/header_sm_image/0dc2d03fe217f8c83829496872af24a0/h/g/hg3ships.jpg',
			'name': 'Bumber Plate Package',
			'price': 500.00,
			'description': '400 total pounds of American Made bumper weight plates. Designed to withstand repeated drops on any surface.',
			'reviews': [],
			_id: 1
		},
		{
			'thumbnail': 'http://cdn.roguefitness.com/media/catalog/product/cache/1/small_image/193x193/4c971525e32ff444db0f0150e765d17f/r/o/rogue-kettlebell-th.jpg',
			'pic': 'http://cdn.roguefitness.com/media/catalog/product/cache/1/header_sm_image/0dc2d03fe217f8c83829496872af24a0/1/2/121-rogue-kettlebell-web-h1.jpg',
			'name': 'Kettlebell',
			'price': 50.00,
			'description': 'American made kettlebell. Sure to stand the test of time.',
			'reviews': [],
			_id: 2
		},
		{
			'thumbnail': 'http://cdn.roguefitness.com/media/catalog/product/cache/1/small_image/193x193/4c971525e32ff444db0f0150e765d17f/s/r/sr-1-rogue-bearing-speed-rope-web-th1.jpg',
			'pic': 'http://cdn.roguefitness.com/media/catalog/product/cache/1/qv_header/0dc2d03fe217f8c83829496872af24a0/s/r/sr-1s-short-handle-bearing-speed-rope-web-h1.jpg',
			'name': 'Speed Rope',
			'price': 20.00,
			'description': 'Speed jump rope. Coated steel cable. Perfect for double-unders!',
			'reviews': [],
			_id: 3
		},
		{
			'thumbnail': 'http://cdn.roguefitness.com/media/catalog/product/cache/1/small_image/193x193/4c971525e32ff444db0f0150e765d17f/k/i/kids-wood-rings-th.jpg',
			'pic': 'http://cdn.roguefitness.com/media/catalog/product/cache/1/qv_header/0dc2d03fe217f8c83829496872af24a0/w/o/wood-rings-web-h1.jpg',
			'name': 'Wood Gymnastic Rings',
			'price': 60.00,
			'description': 'Wood Gymnastic Rings offer a grip, texture, and feel that is distinct from plastic or steel.',
			'reviews': [],
			_id: 4
		}
		
	]; 
	$scope.addItem = function(product) {
		$scope.purchased.push(product);
	}
	$scope.purchased = [];

	$scope.removeItem = function(product) {
		$scope.purchased.pop(product);
	}
	$scope.purchased = [];

	// $scope.addReview = function(i,r) {
	// 	$scope.review = {};
	// 	$scope.products[i].reviews.push(r);
		
	// }
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

app.controller("ReviewController", function() {
	this.review = {};

	this.addReview = function(product) {
		product.reviews.push(this.review);
		this.review = {};
	};
});



