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

let ReposSchema = new mongoose.Schema({
  name: String,
  state: Boolean,
  language: String
});

let Repos = mongoose.model("repos", ReposSchema);

let getIniRepos = cb => {
  console.log(cb);
  Repos.insertMany(arr, function(error, docs) {});
  getRepos(cb);
};

let getRepos = cb => {
  Repos.find({}, (err, data) => {
    if (err) {
      cb(err);
    } else {
      cb(data);
    }
  });
};

let postRepo = (repo, cb) => {
  Repos.insertMany(repo, function(error, docs) {});

  getRepos(cb);
};

let arr = [
  {
    name: "Array",
    state: false,
    language: "JavaScript"
  },
  {
    name: "DOM",
    state: false,
    language: "HTML"
  },
  {
    name: "Github-Project",
    state: false,
    language: "JavaScript"
  }
];

module.exports = {
  getRepos,
  getIniRepos,
  postRepo
};

// Start your code below
