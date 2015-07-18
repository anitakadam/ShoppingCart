var app = angular.module("ShoppingCart", ["ngRoute"]);

app.config(function ($routeProvider) {
	$routeProvider.when("/", {
		controller: 'ShopController as shop',
		templateUrl: 'views/products-list.html',
	}).when("/products/:id", {
		controller: 'ProductController as product',
		templateUrl: 'views/product-detail.html',
	}).when("/cart", {
		controller: 'CartController as cartController',
		templateUrl: 'views/cart.html',
	});
});

app.filter('price', function() {
   return function(input) {
       return "Rs. " + input;
   }
});