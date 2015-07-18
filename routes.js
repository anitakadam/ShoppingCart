var productsdata = require("./src/model/products.js")
var _ = require("lodash")

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
        var product = req.body;
        product.id = productsdata.products.length;
        productsdata.products.push(product);
        res.json({ message: 'Product Added with id ' + req.body.id});
    });
};