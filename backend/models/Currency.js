const mongoose = require('mongoose');

const CurrencySchema = new mongoose.Schema({
  name: String,
  rate: Number,
  stock: Number,
});

module.exports = mongoose.model('Currency', CurrencySchema);
