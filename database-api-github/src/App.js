import React, { Component } from "react";
import Table from "./Componanet/Table.js";
import GetAllRepo from "./Componanet/Get All Repo.js";
import AddRepo from "./Componanet/Add Repo.js";
import axios from "axios";

class App extends Component {
  state = {
    repos: []
  };
 
  getRepos = () => {
    axios
      .get("http://localhost:9000/repo")
      .then(res => {
          this.setState({ repos: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  addRepo = newRepo => {
    axios.post("http://localhost:9000/repo", newRepo)
      .then(res => {
        this.setState({ repos: [...this.state.repos,res.data] });
      })
      .catch(err => {
        console.log(err);
      })
  };
  updateRepo= (id,status) =>{
       axios.put(`http://localhost:9000/repo/${id}/`,{status:!status})
       .then(res=>{ 
         console.log(res)
         this.setState({repos: res.data})
    })
    .catch(err=>{
      console.log(err)
    })
  };

  deleteRepo = id => {
    axios.delete("http://localhost:9000/repo/" + id)
      .then(res => {
        this.setState({ repos: this.state.repos.filter(repo => repo._id !==  id) });
      })
      .catch(err => {
        console.log(err);
      })
  };

  render() {
    console.log(this.state.repos)
    const {addRepo,deleteRepo,getRepos,updateRepo} = this;
    const {repos} = this.state;
    return (
      <div>
        <AddRepo addRepo={addRepo} />
        <GetAllRepo getRepos={getRepos} />
        <Table repos={repos} deleteRepo={deleteRepo}  updateRepo={updateRepo} />
      </div>
    );
  }
}

export default App;
