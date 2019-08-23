import React, {Component} from 'react';
import Table from './component/Table';
import axios from 'axios';


export default class App extends Component {
state={
  repo:[],
}



  getdata = () => {
    axios.get(`http://localhost:9000/task`)

      .then(response => {
        this.setState({ repo: response.data })
        //console.log(this.state.repo)
        console.log("1")
      })
      .catch(error => {
        console.error("eror")
      });
  }


  adddata = (title, language, status,reset) => {
    console.log(title, language, status)
    title = encodeURIComponent(title);
    language = encodeURIComponent(language);
    status = encodeURIComponent(status);

    axios.post(`http://localhost:9000/task/${title}/${language}/${status}`)

      .then(response => {
        console.log("complet add")
      })
      .catch(error => {
        console.error("not complet add")
      });
      reset()
  }


  render() {
    return (
      <div>
    <center><button type="button" className="btn btn-info btn-rounded" onClick={this.getdata} >Get All Repo</button> </center> 
       <Table repo={this.state.repo} adddata={this.adddata}/>
      </div>
    )}}