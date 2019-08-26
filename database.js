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
let reposSchema = new mongoose.Schema({
  title: String,
  language: String,
  state: Boolean
});


let Repos = mongoose.model('repos', reposSchema);

//getRepos method 
let getRepos = (cb) => {
  Repos.find({}, (err, data) => {
    if (err) {
      cb(err)
    } else {
      cb(data)
    }
  })
}

//addRepos method 
let addRepos = (title,language,state,cb) => {
  Repos.create({title,language,state},(err, data) => {
    if (err) {
      cb(err)
    } else {
      getRepos(cb)
    }
  })
}

//deleteOneRepo method 
let deleteOneRepo = (id,cb) =>{
  Repos.deleteOne({ _id: id },(err, data) => {
    if (err) {
      cb(err)
    } else {
      getRepos(cb)
    }
  })
}

//updateRepo method
let updateRepo =(id,updateRepo,cb)=>{
  Repos.updateOne({ _id: id },{ $set: { state: updateRepo } },(err, data) => {
    if (err) {
      cb(err)
    } else {
      getRepos(cb)
    }
  })
}

module.exports = {
  getRepos,
  addRepos,
  updateRepo,
  deleteOneRepo
}