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

app.get("/repo", (req, res) => {
  mongo.getRepos(result => {
    res.send(result);
  });
});

app.post("/repo", (req, res) => {
  const newRepo = req.body;
  mongo.addRepo(newRepo, result => {
    res.send(result);
  });
});

app.put("/repo/:id", (req, res) => {
    console.log('put')
  let id = req.params.id;
  let status = req.body.status;
  console.log('put',id)
  mongo.updateRepo(id,status, result => {
    // console.log(res)
    res.json(result);
  });
});

app.delete("/repo/:id", async (req, res) => {
  let id = req.params.id;
  mongo.deleteRepo(id, result => {
    res.send(result);
  });
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server listening to ${PORT}`));
