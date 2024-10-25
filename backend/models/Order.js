const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  currency: String,
  amount: Number,
  rate: Number,
  delivery: Boolean,
  status: { type: String, default: 'Pending' }
});

module.exports = mongoose.model('Order', OrderSchema);
