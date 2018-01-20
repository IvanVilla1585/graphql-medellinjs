'use strict'

const mongoose = require('mongoose');

async function connection() {
  let conn;
  try {
    conn = await mongoose.createConnection('mongodb://localhost:27017/medellinjs');
  } catch (err) {
    throw new Error(err);
  }
  return conn;
}

module.exports = {
  connection
};