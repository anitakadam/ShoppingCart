var app = angular.module("ShoppingCart", ["ngRoute"])

app.config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "views/product-list.html",
        controller: "ShopController as shop"
    }).when("/cart", {
        templateUrl: "views/cart.html",
        controller: "CartController as cart"
    });
});

app.service("cartService", function () {
    this.cartItems = [];
    this.addProduct = function (product) {
        this.cartItems.push(product);
    };
});

app.controller("ShopController", function ($http, cartService) {
    var self = this;
    this.products = [];
    this.cartItems = cartService.cartItems;

    $http.get("/api/products")
        .then(function (response) {
        self.products = response.data;
    });

    this.addToCart = function (product) {
        cartService.addProduct(product);
    };
});

app.controller("CartController", function (cartService) {
    this.cartItems = cartService.cartItems;
});

app.directive("product", function () {
    return {
        restrict: 'AE',
        templateUrl: "views/product.html"
    }
});

app.filter("indiaCurrency", function() {
    return function(input){
        return "Rs. " + input;
    }
})


