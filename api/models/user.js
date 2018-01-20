'use strict'

const mongoose = require('mongoose');

const TYPE = ['STUDENT', 'TEACHER'];

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: 'The name is required'
  },
  lastName: {
    type: String,
    required: 'The last name is required'
  },
  address: {
    type: String
  },
  document: {
    type: String
  },
  documentType: {
    type: String
  },
  type: {
    type: String,
    enum: TYPE
  },
  status: {
    type: Boolean
  },
  courses: [mongoose.Schema.Types.ObjectId]
}, {timestamp: true});

module.exports =  mongoose.model('User', schema);