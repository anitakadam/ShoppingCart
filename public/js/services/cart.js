app.service("cart", function(cartItemFactory){
	this.items = [];
	
	this.getTotalItems = function(){
		return Object.keys(this.items).length;
	};
	
	this.addProduct = function (product) {
		var existingItem = _.find(this.items,function(item){
			return item.product.id  === product.id;
		});
		
		if (existingItem) {
			existingItem.quantity += 1;
		} else {
			var cartItem = cartItemFactory.create(product);
			this.items.push(cartItem);
		}
	};

	this.getTotalPrice = function () {
		var totalPrice = 0;
		_.forEach(this.items, function(item) {
			totalPrice += item.getTotal();
		});
		return totalPrice;
	};
	
	this.remove = function(cartItem){
		this.items = _.filter(this.items, function(item){
			return item.product.id !== cartItem.product.id;
		});
	};
	
});