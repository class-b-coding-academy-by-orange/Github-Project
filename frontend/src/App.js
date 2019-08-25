import React, { Component } from 'react';
import Table from './components/Table';
import Form from "./components/Form";
import axios from 'axios'
class App extends Component {
  state = {
    repo: [],
  };

  getRepo = () => {
    axios
      .get("http://localhost:9000/repo")
      .then(result => {
        this.setState({
          repo:
            result.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  insertRepo = newRepo => {
    console.log(newRepo);
    axios.post("http://localhost:9000/repo", newRepo)
      .then(result => {
        console.log(result);
        this.setState({ repo: result.data });
      })
      .catch(error => {
        console.log(error);
      })
  };


  UpdateRepo = (id, updateData) => {
    updateData = !(updateData);
    axios.put(`http://localhost:9000/repo/${id}/${updateData}`)
      .then(result => {
        console.log(result);
        this.setState({ repo: result.data });
      })
      .catch(err => {
        console.log(err);
      })
  };


  DeleteRepo = id => {
    axios.delete(`http://localhost:9000/repo/${id}`)
      .then(result => {
        this.setState({ repo: this.state.repo.filter(repo => repo._id !== id) });
      })
      .catch(err => {
        console.log(err);
      })
  };
  render() {
    return (
      <div>
        <Form getRepo={this.getRepo} insertRepo={this.insertRepo} />
        <Table repo={this.state.repo} DeleteRepo={this.DeleteRepo} UpdateRepo={this.UpdateRepo} />
      </div>

    );
  }
}

export default App;
