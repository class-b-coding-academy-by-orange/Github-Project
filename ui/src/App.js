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

  getReposApi = async usernameToSearchFor => {
    try {
      const res = await axios.get(`http://localhost:9000/repos/`);
      console.log(res.data);
      if (res.data === "error") {
        this.setState({
          repos: [],
          searchedForUser: false,
          userFound: false
        });
      } else if (res.data.length === 0)
        this.setState({
          repos: [],
          searchedForUser: true,
          userFound: false
        });
      else if (res.data.length > 0)
        this.setState({
          repos: res.data,
          searchedForUser: true,
          userFound: true
        });
    } catch (err) {
      console.log(err);
      this.setState({ repos: [], searchedForUser: true, userFound: false });
    }
  };

  renderReposOrMessage = () => {
    const { userFound, searchedForUser } = this.state;

    if (!searchedForUser) return "";
    else if (userFound) return <Table repos={this.state.repos} />;
    else return <h3 className="m-5">User is not found!</h3>;
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
