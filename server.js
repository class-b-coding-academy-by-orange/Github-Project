const express = require("express");
const cors = require("cors");
const mongo = require("./database");

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.json('server is working');
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

app.get("/repo", async(req,res) =>{
      const repoDB = await mongo.getRepos();
      res.send(repoDB);

})


app.post ('/repo' , async(req,res) =>{
  const repoDB = await mongo.addRepos();
  res.send (repoDB);

})


app.put ('/repo/:id' , async(req,res) =>{
  const repoDB = await mongo.updateRepos();
  res.send (repoDB);

})


app.delete ('/repo/:id' ,async (req,res) =>{
  const repoDB = await mongo.deleteRepos();
  res.send (repoDB);

})


const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server listening to ${PORT}`));