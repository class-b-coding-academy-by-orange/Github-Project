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


let ReposSchema = new mongoose.Schema({

  title: String,
  language: String,
  state: Boolean
});

//Export modal
let repos = mongoose.model('repo', ReposSchema);

//  function find and Read the data
let getRepo = (cb) => {
  repos.find({}, (error, data) => {
    if (error) {
      cb(error)
    } else {
      cb(data)
    }
  })
}
//function insert
let insertRepo = (Text, cb) => {
  console.log("TEXT1:", Text)
  repos.create(Text, (error, data) => {
    console.log("TEXT2:", Text)
    if (error) {
      console.log("ERROR:", error)
      cb(error)
    }
    else {
      getRepo(cb)
      console.log("DATA:", data)
    }
  })
}

let DeleteRepo = (id, result) => {
  repos.deleteOne(id, (error, data) => {
    if (error) {
      result(error)
      console.log("ERROR:", error)
    } else {
      result(data)
      console.log("DATA:", data)
    }
  })
}
let UpdateRepo = (id, updateData, cb) => {
  repos.updateOne({ _id: id }, { $set: { state: updateData } }, (error) => {
    if (error) {
      cb(error);
      console.log("ERROR:", error)
    } else {

      getRepo(cb);
      console.log("data:", cb)
    }
  });
}

module.exports = {

  getRepo,
  insertRepo,
  DeleteRepo,
  UpdateRepo
}
