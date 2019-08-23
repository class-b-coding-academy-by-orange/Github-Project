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
        console.log("react","1")
      })
      .catch(error => {
        console.error("react","eror")
      });
  }


  adddata = (title, language, status,reset) => {
    console.log("react",title, language, status)
    title = encodeURIComponent(title);
    language = encodeURIComponent(language);
    status = encodeURIComponent(status);

    axios.post(`http://localhost:9000/task/${title}/${language}/${status}`)

      .then(response => {
        console.log("react","complet add")
      })
      .catch(error => {
        console.error("react","not complet add")
      });
      reset()
  }


  deletdata = (id) => {
    console.log("react",id)
    id = encodeURIComponent(id);

    axios.delete(`http://localhost:9000/task/${id}`)

      .then(response => {
        // this.setState({ repo: response.data })
        //console.log(this.state.repo)
        console.log("react","complet delet")

      })
    }

    updatedata = (id,status) => {
    console.log("react",id,status)
    id = encodeURIComponent(id);
    status = encodeURIComponent(!status);

    axios.put(`http://localhost:9000/task/${id}/${status}`)

      .then(response => {
        // this.setState({ repo: response.data })
        //console.log(this.state.repo)
        console.log("react", "complet update")

      })
    }



  render() {
    return (
      <div>
    <center><button type="button" className="btn btn-info btn-rounded" onClick={this.getdata} >Get All Repo</button> </center> 
       <Table repo={this.state.repo} adddata={this.adddata} deletdata={this.deletdata} updatedata={this.updatedata}/>
      </div>
    )}}