var mongoose = require('mongoose')


// In order to make a relationship with Terminal, you need the Terminal model

var orderSchema = new mongoose.Schema({
  price: String, 
  country: String, 
  createdAt: Date,
  adress: { street: String, postcode: String, town: String, country: String},
  products: {reference: Array}
  user: String})

     // Now here it begins with the relationship

var Order = mongoose.model('Order', orderSchema)

module.exports = Order