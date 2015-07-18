var express  = require('express');
var app      = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

// configuration
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(methodOverride());

require('./routes.js')(app);

app.listen(8080);
console.log("App listening on port 8080");
