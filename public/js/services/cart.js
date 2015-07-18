app.service("cart", function(cartItemFactory){
	this.items = {};
	
	this.getTotalItems = function(){
		return Object.keys(this.items).length;
	};
	
	this.addProduct = function (product) {
		var existingItem = this.items[product.id];
		if (existingItem) {
			existingItem.quantity += 1;
		} else {
			var cartItem = cartItemFactory.create(product);
			this.items[product.id] = cartItem;
		}
	};

	this.getTotalPrice = function () {
		var totalPrice = 0;
		for (var id in this.items) {
			var cartItem = this.items[id];
			totalPrice += cartItem.getTotal();
		}
		return totalPrice;
	};
	
	this.remove = function(cartItem){
		this.items[cartItem.product.id] = null;
	};
	
});