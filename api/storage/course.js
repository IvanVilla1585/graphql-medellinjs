'use strict'

require('../models/course');

class CourseStorage {
  constructor(conn = null) {
    if (!conn) throw new Error('connection not provider');

    this.Model = conn.model('Course');
  }

  async save(data) {
    let result = {};
    try {
      result = await new this.Model(data).save();
    } catch (err) {
      throw new Error(err.messages);
    }
    return result;
  }

  async update(id, data) {
    let result = {};
    try {
      result = await new this.Model.findByIdAndUpdate(id, {$set: data}, {new: true});
      if (!result) {
        result = {failed: true, message: 'Course not found'}
      }
    } catch (err) {
      throw new Error(err.messages);
    }
    return result;
  }

  async delete(id) {
    let result = {};
    try {
      result = await new this.Model.findByIdAndRemove(id);
      if (!result) {
        result = {failed: true, message: 'Course not found'}
      }
    } catch (err) {
      throw new Error(err.messages);
    }
    return result;
  }

  async find(query) {
    let results = [];
    try {
      results = await new this.Model.find(query);
    } catch (err) {
      throw new Error(err.messages);
    }
    return results;
  }

  async findById(id) {
    let result = {};
    try {
      result = await new this.Model.findById(id);
      if (!result) {
        result = {failed: true, message: 'User not found'}
      }
    } catch (err) {
      throw new Error(err.messages);
    }
    return result;
  }
}

module.exports = {
  CourseStorage
};