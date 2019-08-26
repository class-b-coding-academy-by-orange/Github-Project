import React, { Component } from 'react'


export class TableItem extends Component {
    state = {
        search:""

    }
    chang=(e)=>{
        this.setState({search:e.target.value})
    }
    dataInput=()=>{
        this.setState({search:""})
    }
    

    render() {
        return (
            <div>
            <form>
         <input  placeholder="Search"  value={this.state.search} onChange={this.chang} />
          <button   onClick={this.props.back.bind(this,this.state.search,this.addInput)}  >search</button>
          </form>
                
            </div>
        )
    }
}

export default TableItem
