
import React, { Component } from 'react';
// import SearchBar from './component/SearchBar';
import Table from './component/Table';
import AddRepo from './component/AddRepo';
import axios from 'axios';


class App extends Component{
  state = {
    repos: []
  };
  
  // search = (e) => {
  //   return e.target.value; 
  // }
 
  getRepo = () => {
    axios.get("http://localhost:9000/repo")
      .then(res => {
          this.setState({ repos: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };
  // addrepo = (newRepo, cb) => {
    
  //   this.setState({
  //     repos: [...this.state.repos, newRepo]
  //   })
  //   cb();
  // }


addrepo = (newRepo) => {
  console.log("heloooooooooo",newRepo)
  axios.post("http://localhost:9000/repo", newRepo)
    .then(res => {
      console.log("heloooooooooo",res)

      this.setState({ repos: res.data});
      console.log(res.data)
    })
    .catch(err => {
      console.log(err);
    })
};
deleteRepo = (id) => {
  console.log(id)
  axios
    .delete("http://localhost:9000/repo/" , id) 
    .then(result => {
    
    })
    .catch(err => {
      console.log(err);
    });
};

render() {
  return (
    <div>
      {/* <SearchBar getRepo={this.getRepo} /> */}
      <AddRepo getRepo={this.getRepo} addrepo={this.addrepo}/>
     
      <Table repos={this.state.repos} deleteRepo={this.deleteRepo} />
    </div>
  );
}
}

export default App;