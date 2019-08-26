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

  console.log("git requst")
  mongo.getRepo((result) => {
    res.json(result);
  })
});

app.post("/repo", (req, res) => {
  const newRepo = req.body;
  mongo.addRepo(newRepo,(result)=> {
    res.json(result);
  });
});


app.put('/repo/:id',(req,res)=>{
  let id =req.params.id;
  mongo.updateRepo(id,(result)=>{
    res.json(ruselt);
  })
})
app.delete("/repo",  (req, res) => {
  let id = req.body
  mongo.deleteRepo(id, result => {
    res.json(result);
  });
});





const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server listening to ${PORT}`));
