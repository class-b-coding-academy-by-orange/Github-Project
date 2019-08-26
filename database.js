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
let gitHubSchema = new mongoose.Schema({
  Title: String,
  RepoStat: Number,
  Language: Boolean,
});

let gitss = mongoose.model('git', gitHubSchema);

let gith = (cb) => {
  gitss.create({Title:"hala",RepoStat:1,Language:true}, (err, data) => {
    if (err) {
      cb(err)
    } else {
      cb(data)
    }
  })
}

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
  console.log("mongo",title,language,status)
  console.log("mongo", title)
  Tasks.create({title: title,
  language:language,
status:status},
     (err, data) => {
    if (err) {
      cb(err)
    } else {
      getTasks(cb);
      
    }
  })
}
let deletetask = (cb,id) => {
  console.log("mongo", "id",id)
  Tasks.deleteOne({_id: id,},
     (err, data) => {
    if (err) {
      cb(err)
    } else {
      getTasks(cb);

    }
  })
}

let updatetask = (cb,id,status) => {
  console.log( "mongo", "id",id)
  console.log("mongo", "status",status)

  Tasks.updateOne({_id: id,}, { $set: { status: status } },

     (err, data) => {
    if (err) {
      cb(err)
    } else {
      getTasks(cb);
      console.log("mongo","status 2",status)     
    }
  })
}



module.exports = {
  gith,
  getTasks,
  newcreate,
  deletetask,
  updatetask,
}

