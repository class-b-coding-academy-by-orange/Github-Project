import React, { Component } from 'react'
import Table from './components/Table'
import axios from 'axios'

export default class App extends Component {
  
  state = {
    repos:[]
  }



  getRepos = () => {
    axios.get(`http://localhost:9000/Repos`)

      .then(response => {
        this.setState({ repos: response.data })
        console.log("repo taken the data")
      })
      .catch(error => {
        console.error("Error")
      });
      console.log(this.state)
  }


  addRepos = (title, language, status,reset) => {
    title = encodeURIComponent(title);
    language = encodeURIComponent(language);
    //status = encodeURIComponent(status);
    console.log(status)
    axios.post(`http://localhost:9001/Repos/${title}/${language}/${status}`)

      .then(response => {
        this.setState({ repos: response.data });
        console.log('djsmnvbv')

      })
      .catch(error => {
        console.error("the data didn't add")
      });
      reset()
  }


  deleteRepos = (id) => {
    id = encodeURIComponent(id);

    axios.delete(`http://localhost:9000/Repos/${id}`)

      .then(response => {
        console.log("the Repo deleted")
      })
    }

    updateRepos = (id,status) => {

    id = encodeURIComponent(id);
    status = encodeURIComponent(!status);

    axios.put(`http://localhost:9000/Repos/${id}/${status}`)

      .then(response => {
        console.log("the Repo updated")
      })
    }
    
  render() {
    const {repos}=this.state
    const {getRepos , addRepos , deleteRepos , updateRepos}=this
    return (
      <div>
        {console.log("app",this.state.repos)}
       <center><button style={{width:'35%'}} type="button" 
                className="btn btn-success btn-lg" onClick={getRepos} >Get All Repo</button> </center> 

        <Table
         repos={repos}
         addRepos={addRepos} 
         deleteRepos={deleteRepos} 
         updateRepos={updateRepos}/>
        
      </div>
    )
  }
}