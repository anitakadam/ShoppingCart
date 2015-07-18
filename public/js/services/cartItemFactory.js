app.service("cartItemFactory", function () {
	this.create = function (product) {
		return {
			product: product,
			quantity: 1,
			getTotal: function () {
				return this.product.price * this.quantity;
			}
		};
	};
});