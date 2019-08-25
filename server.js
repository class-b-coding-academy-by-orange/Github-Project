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

// app.get("/repos", async (req, res) => {
//   const dbResponse = await mongo.getRepos();

//   res.send(dbResponse);
// });

app.get("/repos", (req, res) => {
  mongo.getRepos((dbResponse) => {
    res.json(dbResponse);
  })
});

app.post("/repos", async (req, res) => {
  const newRepo = req.body;
  const dbResponse = await mongo.addRepo(newRepo);

  res.send(dbResponse);
});


app.put("/repos/:id", async (req, res) => {
  const id = req.params.id;
  const newRepoContent = req.body;
  const dbResponse = await mongo.updateRepo(id, newRepoContent);

  res.send(dbResponse);
});

app.delete("/repos/:id", async (req, res) => {
  const id = req.params.id;
  const dbResponse = await mongo.deleteRepo(id);

  res.send(dbResponse);
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server listening to ${PORT}`));

 

 