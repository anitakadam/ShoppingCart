var productsdata = require("./productsData.js")
var _ = require("underscore")

module.exports = function(app) {
    app.get('/api/products', function(req, res) {
        res.json(productsdata)
    });

    app.get('/api/products/:id', function(req, res) {
        var product = _.find(productsdata.products, function(item){
            return item.id == req.params.id;
        })
        res.json(product);
    });

    app.post('/api/products', function(req, res) {
        productsdata.products.push(req.body);
        res.json({ message: 'Product Added with id ' + req.body.id});
    });
};