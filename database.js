const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Repos', { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', function () {
  console.log('mongoose connection error');
  console.log('____________________________')
});

db.once('open', function () {
  console.log('mongoose connected successfully');
  console.log('____________________________')
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
  status: Boolean,
});

let Tasks = mongoose.model('tasks', tasksSchema);

let creatTasks = (cb) => {
  Tasks.create({title: "array",
    language: "HTML",
    status: true,},
     (err, data) => {
    if (err) {
      cb(err)
    } else {
      cb(data)
    }
  })
}


let getTasks = (cb) => {
  Tasks.find({}, (err, data) => {
    if (err) {
      cb(err)
    } else {
      cb(data)
    }
  })
}

let newcreate = (cb,title,language,status) => {
  console.log(title,language,status)
  console.log(title)
  Tasks.create({title: title,
  language:language,
status:status},
     (err, data) => {
    if (err) {
      cb(err)
    } else {
      cb(data)
    }
  })
}

module.exports = {
  creatTasks,
  getTasks,
  newcreate,
}