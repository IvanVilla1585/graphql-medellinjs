'use strict'

const mongoose = require('mongoose');

const STATUS = ['ACTIVE', 'INACTIVE'];

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: 'The name is required'
  },
  username: {
    type: String,
    required: 'The username is required'
  },
  email:{
    type: String,
    required: 'The email is required'
  },
  address: {
    type: mongoose.Schema.Types.Mixed,
    required: 'The address is required'
  },
  phone: {
    type: String,
    required: 'The phone is required'
  },
  status: {
    type: String,
    enum: STATUS,
    default: STATUS[0]
  },
  website: {
    type: String
  }
}, {timestamps: true});

if (!schema.options.toJSON) schema.options.toJSON = {};

/**
 * Add a tranforma method to change _id by id
 * whent toJSON is used.
 */
schema.options.toJSON.transform = (doc, ret) => {
  // remove the _id of every document before returning the result
  ret.id = ret._id; // eslint-disable-line no-param-reassign
  delete ret._id; // eslint-disable-line no-param-reassign
  return ret;
};


module.exports =  mongoose.model('User', schema);