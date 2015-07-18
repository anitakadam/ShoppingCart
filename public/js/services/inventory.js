app.service("Inventory", function ($http, $q) {
	var self = this;
	this.loadProducts = function () {
		if (this.products) {
			return $q.when(this.products);
		}
		var deferred = $q.defer();
		$http.get("/api/products")
			.then(function (response) {
			self.products = response.data;
			deferred.resolve(self.products);
		});
		return deferred.promise;
	};
});