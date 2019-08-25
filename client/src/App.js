import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Add from "./components/Add.js";
import Table from "./components/table";

class mainApp extends Component {
  state = {
    githubData: [],
    UserFound: false,
    reposExist: false
  };

  changePrivate = id => {
    console.log(id);
    console.log(this.state.githubData);
    // let i = this.state.githubData.map(
    //   (elem,
    //   index => {
    //     if (elem._id === id) return index;
    //   })
    // );
    // let p = this.state.githubData[i].state;
    // console.log(p);
    //   if ( ){
    //   axios.put(`http://localhost:9000/apdate/${id}`, {
    //     state: bar
    // })}
    // axios
    //   .put("https://reqres.in/api/users/2", {
    //     name: "Atta Shah",
    //     job: "MEAN Stack Developer"
    //   })
    //   .then(response => {
    //     console.log(response.data);
    //     this.setState({
    //       githubData: response.data
    //     });
    //   });

    // this.setState({
    //   githubData: this.state.githubData.map((elem, index) => {
    //     if (index === id) elem.private = !elem.private;
    //     return elem;
    //   })
    // });
    // console.log(this.state);
  };

  // componentDidMount = () => {
  //   let c = this.getData();
  //   console.log(c);
  //   if (this.getData() === [])
  //     axios.get("http://localhost:9000/").then(responseJson => {
  //       console.log(responseJson.data);
  //       console.log("this.state");
  //       this.setState({
  //         githubData: responseJson.data,
  //         UserFound: true,
  //         reposExist: true
  //       });
  //     });
  //   console.log("sync");
  // };

  getData = () => {
    fetch("http://localhost:9000/Repos")
      .then(response => response.json())
      .then(responseJson => {
        // console.log(responseJson);
        if (responseJson.length === 0) {
          axios.get("http://localhost:9000/").then(responseJson => {
            // console.log(responseJson.data);
            // console.log("this.state");
            this.setState({
              githubData: responseJson.data,
              UserFound: true,
              reposExist: true
            });
          });
        } else {
          this.setState({
            githubData: responseJson,
            UserFound: true,
            reposExist: true
          });
        }
      });
  };

  AddRequest = s => {
    console.log(s);
    let request = `http://localhost:9000/add`;
    axios.post(request, s).then(response => {
      console.log(response.data);
      this.setState({
        githubData: response.data
      });
    });
  };

  deleteRepo = id => {
    console.log(id);
    console.log(this.state.githubData);
    let request = `http://localhost:9000/delete/${id}`;
    // console.log(request);
    axios.delete(request).then(response => {
      console.log(response.data);
      this.setState({
        githubData: response.data
      });
    });
  };

  render() {
    let renderComponent = (
      <Table
        data={this.state.githubData}
        flip={this.changePrivate}
        delete={this.deleteRepo}
      />
    );

    return (
      <div className="container">
        <h1>github API</h1>
        <button className="btn btn-warning" onClick={this.getData}>
          {" "}
          Get The Data{" "}
        </button>
        <Add className="top" AddRequest={this.AddRequest} />
        <div className="bottom"> {renderComponent}</div>
      </div>
    );
  }
}

export default mainApp;
