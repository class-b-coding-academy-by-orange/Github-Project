const express = require("express");
const cors = require("cors");
const mongo = require("./database");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("server is working");
});

app.get("/repos", async (req, res) => {
  const dbResponse = await mongo.getRepos();
  console.log("GET", dbResponse);
  res.send(dbResponse);
});

app.post("/repos", async (req, res) => {
  const newRepo = req.body;
  console.log("post /repos newRepo:", newRepo);

  const dbResponse = await mongo.addRepo(newRepo);
  console.log("post /repos response", dbResponse);
  res.send(dbResponse);
});

app.put("/repos/:id", async (req, res) => {
  const id = req.params.id;
  const newRepoContent = req.body;

  console.log('newRepo content', newRepoContent);

  const dbResponse = await mongo.updateRepo(id, newRepoContent);
  console.log("PUT", dbResponse);

  res.send(dbResponse);
});

app.delete("/repos/:id", async (req, res) => {
  const id = req.params.id;

  const dbResponse = await mongo.deleteRepo(id);
  console.log("DELETE", dbResponse);
  res.send(dbResponse);
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server listening to ${PORT}`));
