const express = require("express");
const cors = require("cors");
const mongo = require("./database");

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.json('server is working');
});


//Example get request with database
app.get('/Repos', (req, res) => {
  mongo.getRepos((result) => {
    res.json(result);
  })
});


// Start your code below


app.post('/Repos', (req, res) => {
  let newTask = req.body;
  mongo.addRepos(newTask, (result) => {
    res.json(result);
  })
});

app.delete('/Repos/:id', (req, res) => {
  let id = req.params.id
  mongo.delRepo(id, (result) => {
    res.json(result);
  })
});


app.put('/Repos', (req, res) => {
  let edit = req.body._id
  mongo.updateRepo(edit, (result) => {
    res.json(result);
  })
});



const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server listening to ${PORT}`));