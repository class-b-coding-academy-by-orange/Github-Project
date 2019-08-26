import React, { Component } from "react";
import axios from "axios";
import Add from "./Componanet/Add.js";
import Table from "./Componanet/Table.js";

class App extends Component {
  state = {
    repos: []
  };

  getRepos = () => {
    axios
      .get("http://localhost:9000/repos")
      .then(result => {
        this.setState({
          repos: result.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  addRepo = newRepo => {
    axios
      .post("http://localhost:9000/repos", newRepo)
      .then(result => {
        this.setState({ repos: [...this.state.repos, result.data] });
      })
      .catch(error => {
        console.log(error);
      });
  };

  deleteRepo = id => {
    axios
      .delete("http://localhost:9000/repos/" + id) // send request to backend to delete obj for id
      .then(result => {
        // this.setState({
        //   repos: this.state.repos.filter(repo => repo._id !== id) // delete object from repos (react) frontend
        // });
      })
      .catch(err => {
        console.log(err);
      });
  };

  updateRepo = (id, data) => {
    // console.log(id, data);
    // console.log('status after change', data);
    axios
      .put("http://localhost:9000/repos/" + id, {"status": data })
      .then(result => {
        // console.log(result);
        this.setState({
          repos: this.state.repos.map(repo => {
              if(repo._id === id)
                repo.status = data;
              return repo;
          })
        })
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <Add getRepos={this.getRepos} addRepo={this.addRepo} />
        <Table
          repos={this.state.repos}
          updateRepo={this.updateRepo}
          deleteRepo={this.deleteRepo}
        />
      </div>
    );
  }
}

export default App;
