var app = angular.module("ShoppingCart", [])

app.controller("ShopController", function($http) {
    var self = this;
    this.products = [];
    $http.get("/api/products")
        .then(function(response){
            self.products = response.data;
        });
});


