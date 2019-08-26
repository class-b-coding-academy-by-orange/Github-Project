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

//get method 
app.get('/repos', (req, res) => {
  mongo.getRepos((result) => {
    res.json(result);
  })
});

//post method
app.post('/repos/:title/:language/:state', (req, res) => {
  let title = req.params.title;
  let language = req.params.language;
  let state = req.params.state;

  mongo.addRepos(title,language,state,(result) => {
    res.json(result);
  })
});

//put method
app.put("/repos/:id/:updateValue",(req, res) => {
  let id = req.params.id;
  let updateValue = req.params.updateValue;
  mongo.updateRepo(id,updateValue,(result) => {
    res.json(result);
  })
});

//delete method
app.delete('/repos/:id',(req,res)=>{
  let id = req.params.id;
  mongo.deleteOneRepo(id,(result) => {
    res.json(result);
  })
})




const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server listening to ${PORT}`));