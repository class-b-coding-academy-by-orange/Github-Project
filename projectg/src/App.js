
import React, { Component } from 'react'
import Table from './component/Table'
import axios from 'axios';
export class App extends Component {
  state= {
   repo:[]

  }

  getData(){
    axios.get (`http://localhost:9000/task`)
    .then(res=>{
      this.setState({repo:res.data})
        //console.log(this.state.repo)
    })
    .catch(error =>{
      

    })
  }
  addData=(title,language,status,reset)=>{
    title = encodeURIComponent(title);
    language = encodeURIComponent(language);
    status = encodeURIComponent(status);

    axios.post(`http://localhost:9000/task/${title}/${language}/${status}`)

    .then(res => {
      console.log("complet add by post");
      this.setState({ repo: res.data })

    })
    .catch(error => {
      console.error("not complet add by post")
    });
    reset()
  }

  deletData = (id) => {
    console.log("react",id)
    id = encodeURIComponent(id);

    axios.delete(`http://localhost:9000/task/${id}`)

      .then(res => {
        //console.log(this.state.repo)
        console.log("react","complet delet");
        this.setState({ repo: res.data })


      })
    }

    updateData = (id,status) => {
    console.log("react",id,status)
    id = encodeURIComponent(id);
    status = encodeURIComponent(!status);

    axios.put(`http://localhost:9000/task/${id}/${status}`)

      .then(res => {
        // this.setState({ repo: response.data })
        //console.log(this.state.repo)
        console.log("react", "complet update");
        this.setState({ repo: res.data })


      })
    }
  





  

  

  handleSubmit=(e)=>{
    e.preventDefault();
  }
  

  render() {
    return (
     <div className="App">

     


      <form onSubmit={this.handleSubmit}>
      
        <button onClick={this.getData}>Get All repo</button>
      </form>
      <Table repo={this.state.repo} addData={this.addData} deletData={this.deletdata} updateData={this.updateData} />
      
    </div>

   
    )
  }
}

export default App
