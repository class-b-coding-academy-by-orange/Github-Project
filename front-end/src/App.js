import React, { Component } from 'react';
import axios from 'axios';
import Search from './components/Search';
import Table from './components/Table';

class App extends Component {
  state = {
    repos: []
  }

  getUsername = (username) => {
    axios.get(`https://api.github.com/users/${username}/repos`)
      .then(res => {
        this.setState({ repos: res.data })
      });
  }

  render() {
    return (
      <div className="App">
        <Search ahmad={'emad'} getUsername={this.getUsername} />
        <Table data={this.state.repos} />
    </div>
    );
  }
}

export default App;