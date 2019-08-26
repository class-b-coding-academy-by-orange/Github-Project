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

app.get('/row' , (req,res)=>{
mongo.firstrow((result)=>{
res.json(result)
})})

app.get('/tasks', (req, res) => {
  console.log('server')
  mongo.getTasks((result) => {
    res.json(result);
  })
});



const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server listening to ${PORT}`));