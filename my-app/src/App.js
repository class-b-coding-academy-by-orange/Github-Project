import React, {
  Component
} from 'react';
//import Search from './components/Search';
import Table from './components/Table';
import axios from 'axios';

class App extends Component {
  state = {
    data : []
  }


  userChange=()=>{
    let request = `http://localhost:9000/tasks`;

    axios
      .get(request)
      .then(response => {
        console.log(response.data)

        this.setState({
          data: response.data
        });
      })
      .catch(error => {
        console.log('react error')
        
      });
    console.log(this.state)
  }

  

  render() {
    const {data} = this.state
    return ( 
    <div>
      {/* <Search userChange={this.userChange}/> */}
      <button className="btn btn-outline-secondary"onClick={this.userChange}>Get all repo</button> 
      <Table myData = {data} /> 
      
    </div>

    );
  }
}

export default App;