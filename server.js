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

// app.get('/tasks', (req, res) => {
//   mongo.getTasks((result) => {
//     res.json(result);
//   })
// });


// Start your code below

// app.get("/data",(req,res)=>{
  
//   mongo.data((result)=>{
// res.json(result)
//   })
// })

app.get("/hala",(req,res)=>{
mongo.hala((neww) =>{
  res.json(neww)
})
})


app.get("/getdata",(req,res)=>{
  
  mongo.getdata((data)=>{
    res.json(data)
  })
})


app.post("/postdata",(req,res)=>{

// console.log(req.body)
let row=req.body
  mongo.postdata(row,(data)=>{
    res.json(data)
  })
})

app.delete("/deldata",(req,res)=>{
let delrow=req.body

console.log("data")
  mongo.deldata(delrow,(data)=>{
    res.json(data)
  })
})

app.put("/putdata/:id",(req,res)=>{
 let val=req.body
let i={_id:req.params.id}
 console.log("val",val,i)
  mongo.putdata(i,val,(data)=>{
    res.json(data)
  })
})

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server listening to ${PORT}`));