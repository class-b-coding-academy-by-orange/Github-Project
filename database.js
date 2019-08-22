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

const addRepo = async (newRepo) => {
  return await Repos.create(newRepo);
}

const updateRepo = async (_id, newRepoContent) => {
  return await Repos.updateOne({_id}, {$set: newRepoContent})
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