import React, { Component } from "react";
import Table from "./components/Table";
import axios from "axios";

import "./App.css";
class App extends Component {
  state = {
    allData: []
  };

  sendData = (title, lang, isPrivate, clear) => {
    console.log(title);
    console.log(lang);
    console.log(isPrivate);
    if (title === "" || lang === "") return;

    axios
      .post(`http://localhost:9000/createData/${title}/${lang}/${isPrivate}`)
      .then(response => {
        this.setState({ allData: response.data });
      });
    clear();
  };

  getData = () => {
    console.log("getData");
    axios.get("http://localhost:9000/getData").then(response => {
      console.log("Response", response.data);
      this.setState({ allData: response.data });
    });
  };

  deleteData = ID => {
    console.log(ID);
    axios.delete(`http://localhost:9000/deleteData/${ID}`).then(response => {
      this.setState({ allData: response.data });
    });
  };

  render() {
    return (
      <>
        <Table
          sendData={this.sendData}
          getData={this.getData}
          allData={this.state.allData}
          deleteData={this.deleteData}
        />
      </>
    );
  }
}

export default App;
