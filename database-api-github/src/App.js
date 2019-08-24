import React, { Component } from 'react';
import Table from './Componanet/Table.js';
import GetAllRepo from './Componanet/Get All Repo.js';
import AddRepo from './Componanet/Add Repo.js';
import axios from 'axios';



class App extends Component {

  state = {
    repos: []
  }


  OnCahnge = (e) => {
    console.log(e.target.value)

  }
  getRespos = async ()=>{

    const res = await axios.get("http://localhost:9000/repo")
    if (res.status === 200)
     this.setState({ repos: res.data });
  }
  addRepo = async newRepo => {
    const res = await axios.post("http://localhost:9000/repo", newRepo);

    if (res.status === 200)
      this.setState({ repos: [...this.state.repos, res.data] });
  }
 
  

  render() {

    return (
      <div>
        <AddRepo addRepo= {this.addRepo}  />
        <GetAllRepo getRespos={this.getRespos} />
        <Table repos={this.state.repos} />
      </div>
    )
  }


}


export default App;
