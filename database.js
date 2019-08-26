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


let repoSchema = new mongoose.Schema({
  title: String,
  language: String,
  repostate: Boolean,
});



let  Repo= mongoose.model('repo', repoSchema);



let getRepo = (cb) => {
  Repo.find({}, (err, data) => {
    if (err) {
      cb(err)
    } else {
      cb(data);
    }
  })
}
let addRepo = (newRepo,cb) => {
  Repo.create(newRepo, (err, data) => {
    if (err) {
      cb(err)
    } else {
      getRepo(cb);
    }
  })
}
let updateRepo = (id,repostate,cb) => {
  Repo.updateOne({_id:id},{$set:{status:status}},(err,data) => {
    if (err) {
      cb(err)
    } else {
      getRepo(cb);
    }
  })
}
let deleteRepo = (id, cb) => {
  Repos.deleteOne({_id: id}, (err, data) => {
 
  if (err) {
   cb(err);
  }
  getRepo(cb);
});
};



module.exports = {
  addRepo,
  getRepo,
  updateRepo,
  deleteRepo
  
};