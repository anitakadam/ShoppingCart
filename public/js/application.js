var app = angular.module("ShoppingCart", [])

app.controller("ShopController", function ($http) {
    var self = this;
    this.products = [];
    this.cartItems = [];
    $http.get("/api/products")
        .then(function (response) {
        self.products = response.data;
    });

    this.addToCart = function (product) {
        this.cartItems.push(product);
    }

});


