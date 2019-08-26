import React, {Component} from 'react';
import Tablee from './component/Tablee';
import axios from 'axios';
import Button from 'react-bootstrap/Button'


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
        console.log("react","complet add");
        this.setState({ repo: response.data })

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
        console.log("react","complet delet");
        this.setState({ repo: response.data })


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
        console.log("react", "complet update");
        this.setState({ repo: response.data })


      })
    }



  render() {
    return (
      <div>
      <br></br>
       <Tablee repo={this.state.repo} adddata={this.adddata} deletdata={this.deletdata} updatedata={this.updatedata}/>
      <Button variant="outline-primary"  size="lg" block  onClick={this.getdata} >Get All Repo</Button>

      </div>
    )}}