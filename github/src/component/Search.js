import React, { Component } from 'react';



export default class Search extends Component {
    state={
        search:""

    }

chang=(e)=>{
    this.setState({search:e.target.value})
}
dell=()=>{
    this.setState({search:""})
}



    render() {
     //   console.log(this.state.search)
      return (
        <div>
            <form>
         <input className="mb-3" placeholder="Search"  value={this.state.search} onChange={this.chang} />
          <button type="button" className="btn btn-info btn-rounded" onClick={this.props.back.bind(this,this.state.search,this.dell)}  >search</button>
          </form>
          </div>
      )
    }
   
   
  }