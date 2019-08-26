const express = require("express");
const cors = require("cors");
const mongo = require("./database");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("server is working");
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

app.post("/createData/:title/:lang/:isPrivate", (req, res) => {
  console.log(req.params.title);
  console.log(req.params.lang);
  console.log(req.params.isPrivate);
  // var y = req.params.isPrivate === "true" ? true : false;
  var addedData = {
    title: req.params.title,
    language: req.params.lang,
    isPrivate: req.params.isPrivate
  };
  // let x = result => {
  //   res.json(result);
  // };
  console.log(addedData);
  mongo.createTask(addedData, result => {
    res.json(result);
  });
});

app.get("/getData", (req, res) => {
  mongo.getTask(result => {
    res.json(result);
  });
});

app.delete("/deleteData/:id", (req, res) => {
  console.log("id", req.params.id);
  mongo.deleteTask({ _id: req.params.id }, result => {
    res.json(result);
  });
});

app.put("/updateData/:id/:value", (req, res) => {
  console.log("id", req.params.id);
  mongo.updateTask(
    { _id: req.params.id },
    { $set: { isPrivate: req.params.value } },
    result => {
      res.json(result);
    }
  );
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server listening to ${PORT}`));
