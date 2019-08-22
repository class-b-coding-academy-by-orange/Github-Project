const express = require("express");
const cors = require("cors");
const mongo = require("./database");

const app = express();
app.use(express.json());
app.use(cors());

// Start your code below

app.get('/', (req, res) => {
  res.json('server is working');
});

app.get('/repos', (req, res) => {
  console.log('get /repos');
  res.send('get /repos');
});

app.post('/repos', async (req, res) => {
  const newRepo = req.body;
  const dbResponse =  await mongo.addRepo(newRepo);
  
  res.send(dbResponse);
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