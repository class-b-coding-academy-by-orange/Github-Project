const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Repos', { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', function () {
  console.log('mongoose connection error');
  console.log('____________________________')
});

db.once('open', function () {
  console.log('mongoose connected successfully');
  console.log('____________________________')
});


// Example schema

// let tasksSchema = new mongoose.Schema({
//   title: String,
//   age: Number,
//   isCompleted: Boolean,
// });


// Example modal
// let Tasks = mongoose.model('tasks', tasksSchema);

// Example function
// let getTasks = (cb) => {
//   Tasks.find({}, (err, data) => {
//     if (err) {
//       cb(err)
//     } else {
//       cb(data)
//     }
//   })
// }

// example of module.export
// module.exports = {
//   getTasks
// }


// Start your code below


let Myschema=new mongoose.Schema({
 title:String,
 language:String,
 state:Boolean,

})

let table=mongoose.model("table",Myschema)





let hala=(cb)=>{
  table.create({title:'Hala',language:'bb',state:true},(err,hala)=>{
    if(err){
  cb(err)
    
      }  else
      {
cb(hala)
    }
  })
}


let postdata=(row,cb)=>{
  console.log(row)
  table.create(row,(err,data)=>{
    if (err){
      cb(err)
    }
    else
    {
    cb(data)
    console.log(data)
    
    }
  })
}


let getdata =(cb)=>{
  table.find({},(err,data)=>{
    if(err){
  cb(err)
    
      }  else
      {
      
    cb(data)
    console.log(data)
    }
  })
}

let deldata=(delrow,cb)=>{
  
  table.deleteOne(delrow,(err,data)=>{

    if(err){
      cb(err)}
      else
      {
      getdata(cb)
      }
    })
  }



  let putdata=(i,val,cb)=>{
    console.log(i)
    table.updateOne(i,{$set:val},(err,data)=>{
      if(err){
        cb(err)}
        else
        {
        getdata(cb)
        
        }

    })
  }
module.exports={hala,getdata,postdata,deldata ,putdata}