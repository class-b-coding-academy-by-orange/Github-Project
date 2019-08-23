const express = require("express");
const cors = require("cors");
const mongo = require("./database");
const bodyParser= require('body-parser')
var path = require('path');



const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static(path.resolve(__dirname, 'public')));


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


app.get('/tasks', (req, res) => {
  mongo.creatTasks((result) => {
    res.json(result);
  })
});


app.get('/task', (req, res) => {
  mongo.getTasks((result) => {
    res.json(result);
  })
});


app.post('/task/:title/:language/:status', (req, res) => {
 // app.post('/task/:title', (req, res) => {

  let title = encodeURIComponent(req.params.title);
  let language = encodeURIComponent(req.params.language);
  let status = encodeURIComponent(req.params.status);
 
  console.log(title,language,status)
  //console.log(title)

 // res.json(`server is working data => ${title} ${language} ${status}`)
 
// console.log(req.body)
 console.log("helloooooooooooooooooooo")

  mongo.newcreate((result) => {
     res.json(result);
   },title,language,status)
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server listening to ${PORT}`));