 var mongoose = require('mongoose');

 var OrderSchema = new mongoose.Schema({
  name: String,
  addressOne: String,
  addressTwo: String,
  city: String,
  state: String,
  zip: String
 });

 mongoose.model('Order', OrderSchema);