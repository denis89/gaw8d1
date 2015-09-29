var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ecommerce');

var bodyParser = require('body-parser')

var Order = require('./models/order');
var Product = require('./models/product');
var User = require('./models/user');