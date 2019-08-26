import React, { Component } from 'react';
import Table from './component/Table';
import AddRepo from './component/AddRepo'
import GetAllRepos from './component/GetAllRepos'
import axios from 'axios';


export default class App extends Component {
  state = {
     repos: []
  };

//getAllRepos method
  getAllRepos = () => {
    axios.get("http://localhost:9000/repos")
    .then(response => {
      this.setState({ repos: response.data });
    });
  };

//deleteRepo method
  deleteRepo = (id) => {
    axios.delete(`http://localhost:9000/repos/${id}`)
    .then(response => {
      this.setState({ repos: response.data });
    });
  };

//postRepo method
  postRepo = (title, language, state,cleanInput) => {
    axios
      .post(`http://localhost:9000/repos/${title}/${language}/${state}`)
      .then(response => {
        this.setState({ repos: response.data });
      });
      cleanInput()
  };

//updateRepo method
  updateRepo = (id, updateValue) => {
   //swap value
    updateValue = !(updateValue);
    axios.put(`http://localhost:9000/repos/${id}/${updateValue}`)
      .then(response => {
        this.setState({ repos: response.data });
      });
  };

  render() {
    const { repos } = this.state;
    const { getAllRepos, deleteRepo, updateRepo, postRepo } = this;
    return (
      <React.Fragment>
        <div className="container w-75 ">

          {/* render AddRepo component */}
          <div className="row" style={{ marginTop: "60px", marginLeft: "20px" ,marginBottom:"80px"}}>
            <AddRepo postRepo={postRepo} />
          </div>

          {/* render GetAllRepos component */}
          <div className="row" style={{ marginLeft: "690px" }}>
              <GetAllRepos getAllRepos={getAllRepos} />
          </div>

          {/* render Table component */}
          <div className="row">
              <Table repos={repos} getAllRepos={getAllRepos}
               deleteRepo={deleteRepo} updateRepo={updateRepo}/>
          </div>

        </div>
      </React.Fragment>
    );
  }
}

