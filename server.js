const express = require("express");
const cors = require("cors");
const mongo = require("./database");
const app = express();
const bodyParser= require('body-parser')
const path = require('path');

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


// get (show/find) data
app.get('/Repos', (req, res) => {

  mongo.getRepos((result) => {
    res.json(result);
  })
});


//post (create new data)
app.post('/Repos/:title/:language/:status', (req, res) => {
  console.log('SBANEH')

  let title = encodeURIComponent(req.params.title);
  let language = encodeURIComponent(req.params.language);
  let status = encodeURIComponent(req.params.status);
console.log(status)
  
  //encodeURIComponent = function Required. The URI to be encoded
  mongo.newRepos(result => {
     res.json(result)
   },title,language,status)
});


//delete the data by id

app.delete('/Repos/:id', (req, res) => {

  let id = encodeURIComponent(req.params.id);

  mongo.deleteRepos((result) => {
    res.json(result);
  },id)
});



//put (edit the status)
app.put('/Repos/:id/:status', (req, res) => {

  let id = encodeURIComponent(req.params.id);
  let status = encodeURIComponent(req.params.status);

  mongo.updateRepos((result) => {
    res.json(result);
  },id,status)
});




const PORT = process.env.PORT || 9001;
app.listen(PORT, () => console.log(`Server listening to ${PORT}`));