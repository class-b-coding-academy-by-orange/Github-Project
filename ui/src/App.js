import React, { Component } from "react";
import axios from "axios";

import Options from "./components/Options";
import Table from "./components/Table";

class App extends Component {
  state = {
    repos: [],
    userFound: false,
    searchedForUser: false
  };

  getRepos = async () => {
    const response = await axios.get("http://localhost:9000/repos");

    if (response.status === 200) this.setState({ repos: response.data });
  };

  addRepo = async newRepo => {
    const response = await axios.post("http://localhost:9000/repos", newRepo);

    if (response.status === 200)
      this.setState({ repos: [...this.state.repos, response.data] });
  };

  updateRepo = async (id, newState) => {
    const response = await axios.put("http://localhost:9000/repos/" + id, {
      state: newState
    });

    if (response.status === 200 && response.data.nModified > 0)
      if (
        response.data.n === response.data.nModified &&
        response.data.nModified === response.data.ok
      )
        this.setState({
          repos: this.state.repos.map(repo => {
            if (repo._id === id) repo.state = newState;
            return repo;
          })
        });
  };

  deleteRepo = async id => {
    const response = await axios.delete("http://localhost:9000/repos/" + id);

    if (response.status === 200 && response.data.deletedCount > 0)
    if (
      response.data.n === response.data.deletedCount &&
      response.data.deletedCount === response.data.ok
    )
      this.setState({
        repos: this.state.repos.filter(repo => {
          if (repo._id !== id) return repo;
        })
      });
  };

  render() {
    const { getRepos, addRepo, updateRepo, deleteRepo } = this;
    const { repos } = this.state;

    return (
      <div className="container m-3">
        <Options getRepos={getRepos} addRepo={addRepo} />
        {repos.length > 0 ? (
          <Table
            repos={repos}
            updateRepo={updateRepo}
            deleteRepo={deleteRepo}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
