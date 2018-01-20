'use strict'

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  status: {
    type: Boolean,
    default: true
  },
  price: {
    type: Number
  },
  level: {
    type: Number
  }
}, {timestamp: true});

module.exports = mongoose.model('Course', schema);