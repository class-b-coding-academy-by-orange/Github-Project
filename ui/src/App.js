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
    console.log("get all repos app worked");

    const response = await axios.get("http://localhost:9000/repos");
    console.log("GET REPOS RES", response);
    this.setState({ repos: response.data });
  };

  addRepo = async newRepo => {
    const response = await axios.post("http://localhost:9000/repos", newRepo);
    console.log("ADD REPO RES", response);
    // this.setState({ repos: response.data });
  };

  updateRepo = async (id, newState) => {
    console.log("UPDATE REPO ID", id);
    const response = await axios.put("http://localhost:9000/repos/" + id, {
      state: newState
    });
    console.log("UPDATE REPO RES", response);
  };

  deleteRepo = async id => {
    console.log("DELETE REPO ID", id);
    const response = await axios.delete("http://localhost:9000/repos/" + id);
    console.log("DELETE REPO RES", response);
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
