app.controller("ShopController", function (Inventory) {
	var self = this;
	this.products = [];

	Inventory.loadProducts().then(function (products) {
		self.products = products;
	});
});