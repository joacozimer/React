const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const TaskSchema = new Schema({
  text: String,
  done: { type: Boolean, default: false }
});

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;
