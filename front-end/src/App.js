import React, { Component } from "react";
import axios from "axios";

import Options from "./components/InputButton";
import Table from "./components/Table";

class App extends Component {
  state = {
    repos: [],
    userFound: false,
    searchedForUser: false
  };

  isSucceeded(res, key) {
    if (res.status === 200 && res.data[key] > 0)
      if (res.data.n === res.data[key] && res.data[key] === res.data.ok)
        return true;

    return false;
  }

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

    if (this.isSucceeded(response, "nModified")) {
      this.setState({
        repos: this.state.repos.map(repo => {
          if (repo._id === id) repo.state = newState;
          return repo;
        })
      });
    }
  };

  deleteRepo = async id => {
    const response = await axios.delete("http://localhost:9000/repos/" + id);

    if (this.isSucceeded(response, "deletedCount")) {
      this.setState({
        repos: this.state.repos.filter(repo => repo._id !== id)
      });
    }
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