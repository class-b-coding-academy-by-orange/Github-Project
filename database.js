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
  status: Boolean,
});

const Repos = mongoose.model('Repos', ReposSchema);



//get and show the data (find)
let getRepos = (cb) => {
  Repos.find({}, (err, data) => {
    if (err) {
      cb(err)
    } else {
      cb(data)
    }
  })
}


//create (post/insert) new data
let newRepos = (cb,title,language,status) => {

  Repos.create({title: title,
  language:language,
status:status},
     (err, data) => {
    if (err) {
      cb(err)
    } else {
      getRepos(cb);
    }
  })
}


//delete
let deleteRepos = (cb,id) => {
  Repos.deleteOne({_id: id},
     (err, data) => {
    if (err) {
      cb(err)
    } else {
      getRepos(cb);

    }
  })
}



//put (update/edit) the data
let updateRepos = (cb,id,status) => {

  Repos.updateOne({_id: id}, { $set: { status: status } },

     (err, data) => {
    if (err) {
      cb(err)
    } else {
      getRepos(cb);
    }
  })
}



module.exports = {
  getRepos,
  newRepos,
  deleteRepos,
  updateRepos,
}