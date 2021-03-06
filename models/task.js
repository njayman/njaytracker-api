//module imports
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//schema construction
const Steps = new Schema({
  stepName: {
    type: String,
    required: true,
  },
});

const Task = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  complete: {
    type: Boolean,
    default: false,
  },
  steps: [Steps],
  createdat: {
    type: Date,
    default: Date.now,
  },
  hasDeadline: {
    type: Boolean,
    default: false,
  },
  deadlineDate: {
    type: String,
  },
  deadlineTime: {
    type: String,
  },
});

//model constructions
const TaskModel = mongoose.model("TaskModel", Task);
const StepModel = mongoose.model("StepModel", Steps);

//model exports
module.exports = { tasks: TaskModel, steps: StepModel };
