'use strict';
var mongoose = require('mongoose'); // import mongoose เพื่อมาสร้าง colection ของข้อมูล คล้ายๆ table ของค่าย sql
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  title: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);