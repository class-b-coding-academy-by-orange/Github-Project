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
const repo = new mongoose.Schema({
  title: String,
  language: String,
  status: Boolean
});

let Repos = new mongoose.model("repo", repo);

let getRepos = cb => {
  Repos.find({}, (err, data) => {
    if (err) {
      console.log(err);
    }
    cb(data);
  });
};

let addRepo = (newRepo, cb) => {
  Repos.create(newRepo, (err, data) => {
    if (err) console.log(err);
    cb(data);
  });
};
let updateRepo = (id,status,cb) => {
  console.log(cb) 
  Repos.updateOne({_id:id},{$set:{status:status}}, (err, data) => {
    if (err) {
      cb(err);
    }else{
    console.log('update correct') 
    console.log(data)
    getRepos(cb)
    }
  });
}

let deleteRepo = (id, cb) => {
    Repos.deleteOne({_id: id}, (err, data) => {
   
    if (err) {
      console.log(err);
    }
    cb(data);
  });
};

module.exports = {
  getRepos,
  addRepo,
  updateRepo,
  deleteRepo
};
