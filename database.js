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


// Example schema
let reposSchema = new mongoose.Schema({
  title: String,
  state: String,
  isPrivate: Boolean,
  language: String,
});

// Example modal
let Repos = mongoose.model('repos', reposSchema);

// Example function
let getRepos = (cb) => {
  Repos.find({}, (err, data) => {
    if (err) {
      cb(err)
    } else {
      cb(data)
    }
  })
}

// Example function

let addRepos = (repo, cb) => {
  Repos.create(repo, (err, result) => {
    if (err) {
      cb(err)
    } else {
      // console.log('RESULT:', result)
      // cb(result)
      getRepos(cb)
    }
  })
}

let delRepo = (id, cb) => {
  Repos.deleteOne({_id:id}, (err, result) => {
    if(err){
      cb(err)
    } else {
      // cb(result)
      getRepos(cb)
    }
  })
}

let updateRepo = (repo, cb) => {
  Repos.update(repo, (err, result) => {
    if(err){
      cb(err)
    } else {
      // cb(result)
      getRepos(cb)
    }
  })
}
// example of module.export
module.exports = {
  getRepos,
  addRepos,
  delRepo,
  updateRepo
}

// Start your code below


