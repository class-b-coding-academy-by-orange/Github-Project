const express = require("express");
const cors = require("cors");
const mongo = require("./database");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("server is working");
});

/*
//Example get request with database
app.get('/tasks', (req, res) => {
  mongo.getTasks((result) => {
    res.json(result);
  })
});
*/

// Start your code below

app.get("/repos", (req, res) => {
  mongo.getRepos(result => {
    res.send(result);
  });
});

app.post("/repos", (req, res) => {
  const repo = req.body;
  mongo.addRepo(repo, result => {
    res.send(result);
  });
});

app.put("/repos/:id", (req, res) => {
  const id = req.params.id;
  const updatedStatus = req.body;
  console.log("req.body",updatedStatus)
  mongo.updateRepo(id, updatedStatus, result => {
    res.send(result);
  });
});

app.delete("/repos/:id", async (req, res) => {
  const id = req.params.id;
  mongo.deleteRepo(id, result => {
    res.send(result);
  });
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server listening to ${PORT}`));
