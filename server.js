const express = require("express");
const cors = require("cors");
const mongo = require("./database");
const axios = require("axios");
// var bodyParser = require("body-parser");

const app = express();

// app.use(
//   bodyParser.urlencoded({
//     extended: true
//   })
// );

// app.use(bodyParser.json());

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  mongo.getIniRepos(result => {
    res.json(result);
  });
});

app.get("/Repos", (req, res) => {
  mongo.getRepos(result => {
    res.json(result);
  });
});

app.get("/Repos", (req, res) => {
  mongo.getRepos(result => {
    res.json(result);
  });
});

app.post("/data", (req, res) => {
  let repo = req.body;
  console.log(req.body);
  mongo.postRepo(repo, result => {
    res.json(result);
  });
});
/*
//Example get request with database


************************************************************

app.get("/:s", (req, res) => {
  let s = req.params.s;
  let request = `https://api.github.com/users/${s}/repos`;
  axios
    .get(request)
    .then(response => {
      res.send(response.data.slice(0, 5));
    })
    .catch(error => {
      res.send("User is not Found");
    });
});

app.post("/data", (req, res) => {
  let newData = req.body;
  console.log(newData);
  data.push(newData);
  res.json(data);
});

data = [
  {
    id: 1,
    name: "Ahmad",
    Age: 27
  },
  {
    id: 2,
    name: "Orayb",
    Age: 27
  }
];

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("it's listening");
});

module.exports = app;
*/

// Start your code below

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server listening to ${PORT}`));
