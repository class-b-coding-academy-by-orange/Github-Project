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
app.get('/tasks', (req, res) => {
  mongo.getTasks((result) => {
    res.json(result);
  })
});


// Start your code below

app.post('/tasks', (req, res) => {
  mongo.getTasks((result) => {
    res.json(result);
  })
});

app.put('/tasks/: id', (req, res) => {
  mongo.getTasks((result) => {
    res.json(result);
  })
});

app.delete('/tasks/:id', (req, res) => {
  mongo.getTasks((result) => {
    res.json(result);
  })
});

const PORT = process.env.PORT || 9000;
app.listen(PORT,()=>console.log(`servar listening to ${PORT}`));






