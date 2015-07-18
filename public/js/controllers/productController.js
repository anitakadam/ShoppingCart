app.controller("ProductController", function ($routeParams, Inventory) {
	var self = this;
	Inventory.loadProducts().then(function (products) {
		var id = $routeParams.id;
        self.id = id;
		self.name = products[id].name;
		self.description = products[id].description;
		self.price = products[id].price;
		self.imgUrl = products[id].imgUrl;
		self.features = products[id].features;
	});
});