'use strict'

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: 'The title is required'
  },
  body: {
    type: String,
    required: 'The body is required'
  },
  userId:{
    type: mongoose.Schema.Types.ObjectId,
    required: 'The userId is required'
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


module.exports =  mongoose.model('Post', schema);