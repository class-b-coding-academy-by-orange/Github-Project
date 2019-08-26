import React ,{Component}from 'react';
import Table from './Comp/Table';
const axios = require('axios');
class App extends Component{
  state={res:[],title:"",language:"",pravicy:"",note:"" }

request=()=>{
  
  axios.get("http://localhost:9000/getdata")
.then((res)=>{
  console.log(res) 
  if (res.data.length===0)
  this.setState({note:"there Is No REPO"}) 
  else
  this.setState({res:res.data})
 
  
  // this.setState({i:0})
  console.log(this.state)
})



 
}


  opt=(e)=>{
    
 this.setState({[e.target.name]:e.target.value})
 
 console.log(this.state)
  
  }

  postdata=()=>{
   
    
 let pravicy=JSON.parse(this.state.pravicy)

    let obj={
      title:this.state.title,
      language:this.state.language,
      state:pravicy
    }
    // console.log(obj)

     axios.post("http://localhost:9000/postdata",obj)
     .then((res)=>{
       
       console.log(res)
       alert("your New Reop was Added succufly" )
     this.setState({res:res.data})
     console.log(this.state)
     
    })
     
  }
 
  toggel=(e,id)=>{ 
     console.log(e)
     console.log(id)
  let val={state:!e}
  let i=id
 
  console.log(val)
  axios.put(`http://localhost:9000/putdata/${i}`,val)
  .then((res)=>{
    this.setState({res:res.data})
  })

   }

  
  remove=(info)=>{
    console.log(info)
    axios.delete("http://localhost:9000/deldata",info)
    .then((res)=>{
      
      console.log(res)
      this.setState({res:res.data})
    })
  }
  render(){
   
  return (
  <>
  <div style={{textAlign:"center",color:"white",backgroundColor:"black",paddingBottom:"10px",}} >Github Table</div>
       <div >

     <form  style={{margin:"18px"}}>
      <input type="text" name="title"  placeholder="title" onChange={this.opt.bind(this)} ></input>
     <input type="text"placeholder="language" name="language"  onChange={this.opt.bind(this)}></input>   
     
     <select defaultValue="" name="pravicy" className="btn btn-outline-primary"  onClick={this.opt.bind(this)} >
     <option value="" disabled  hidden>Pravicy</option>
    <option  value="true" >pravite</option>
    <option   value="false">public</option>
  
  </select>
 
</form>
</div>

<div>
<button  style={{float:"right", marginTop:"-53px", marginRight:"5px"}} className="btn btn-outline-primary" onClick={this.request}>Get All Repo</button>
     <button style={{float:"right", marginRight:"130px",marginTop:"-53px"}} disabled={this.state.title.length===0 || this.state.language.length===0 || this.state.pravicy.length===0}  className="btn btn-outline-primary" onClick={this.postdata} >Add New Repo</button>

     </div>
     

     {this.state.res.length>0 && <Table data={this.state.res} remove={this.remove} toggel={this.toggel}/>}
    {this.state.res.length===0 && this.state.note.length>0 && <h1>THERE IS NO REPO</h1>}
   


    </>
  );
}
}
export default App;
