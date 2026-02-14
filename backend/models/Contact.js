const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  date: Date,
  message: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Contact', schema);