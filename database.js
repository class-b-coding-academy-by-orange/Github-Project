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

const reposSchema = new mongoose.Schema({
  title: String,
  language: String,
  state: Boolean,
});

const Repos = mongoose.model('repos', reposSchema);

const getRepos = async () => {
  return await Repos.find({});
} 

const addRepo = async () => {
  return await Repos.insertOne({});
}

const updateRepo = async (_id) => {
  // return await Repos.updateOne({_id}, )
}

const deleteRepo = async (_id) => {
  return await Repos.deleteOne({_id});
}

module.exports = {
  getRepos,
  addRepo,
  updateRepo,
  deleteRepo
}

