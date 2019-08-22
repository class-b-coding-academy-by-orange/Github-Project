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

app.get('/repos', (req, res) => {
  console.log('get /repos');
  res.send('get /repos');
});

app.post('/repos', (req, res) => {
  console.log('post /repos');
  res.send('post /repos')
});

app.put('/repos/:id', (req, res) => {
  const id = req.params.id;
  console.log(`post /repos/${id}`);
  res.send(`post /repos/${id}`);
});

app.delete('/repos/:id', (req, res) => {
  const id = req.params.id;
  console.log(`post /repos/${id}`)
  res.send(`post /repos/${id}`);
});


const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server listening to ${PORT}`));