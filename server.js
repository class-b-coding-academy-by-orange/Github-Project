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

app.get('/repo', (req, res) => {
  mongo.getRepo((result) => {
    res.json(result);
  })
});
app.post('/repo', (req, res) => {
  let AddText = req.body;
  console.log('post req')
  mongo.insertRepo(AddText, (result) => {
    console.log("RESULT:", result)
    res.send(result);
  })
});

app.delete('/repo/:id', (req, res) => {
  let id = req.params.id;
  console.log("ID:", id);
  mongo.DeleteRepo(id, (result) => {
    res.json(result);
  })
});

app.put("/repo/:id/:updateData", (req, res) => {
  let id = req.params.id;
  let updateData = req.params.updateData;
  mongo.UpdateRepo(id, updateData, (result) => {
    res.json(result);

  });
});




const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server listening to ${PORT}`));