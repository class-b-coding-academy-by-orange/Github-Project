const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/Repos", { useNewUrlParser: true });
const db = mongoose.connection;

db.on("error", function() {
  console.log("mongoose connection error");
  console.log("____________________________");
});

db.once("open", function() {
  console.log("mongoose connected successfully");
  console.log("____________________________");
});

/*
// Example schema
let tasksSchema = new mongoose.Schema({
  title: String,
  age: Number,
  isCompleted: Boolean,
});

// Example modal
let Tasks = mongoose.model('tasks', tasksSchema);

// Example function
let getTasks = (cb) => {
  Tasks.find({}, (err, data) => {
    if (err) {
      cb(err)
    } else {
      cb(data)
    }
  })
}

// example of module.export
module.exports = {
  getTasks
}
*/

// Start your code below

let tasksSchema = new mongoose.Schema({
  title: String,
  language: String,
  isPrivate: Boolean
});

let Tasks = mongoose.model("tasks", tasksSchema);

let createTask = (add, cb) => {
  console.log("Add", add);
  console.log("cb", cb);
  Tasks.create(add, (err, data) => {
    if (err) {
      cb(err);
    } else {
      getTask(cb);
    }
  });
};

let getTask = cb => {
  console.log(cb);
  Tasks.find({}, (err, data) => {
    if (err) {
      cb(err);
    } else {
      cb(data);
    }
  });
};

let deleteTask = (delId, cb) => {
  console.log("DelId", delId);
  console.log("cb", cb);
  Tasks.deleteOne(delId, (err, data) => {
    if (err) {
      cb(err);
    } else {
      getTask(cb);
    }
  });
};
module.exports = {
  createTask,
  getTask,
  deleteTask
};
