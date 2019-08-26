import React, { Component } from 'react'
import Add from './componants/Add'

export default class App extends Component {
  
  state = {

    data :[]
  }

   async componentDidMount() {
const url = 'http://localhost:9000/data'
const response = await fetch (url);
const data = await response.json();
console.log(data)
this.setState({
  data
})

  }

  render() {
    return (
      <div>
        <Add />
       
        
      </div>
    )
  }
}
