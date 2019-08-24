import React, { Component } from 'react';


export default class Item extends Component {

    render() {
        const {items,id,deleteRepos,changestatus}=this.props;
      return (
        <React.Fragment>
          <tr>
          <td>{id+1}</td>
          <td>{items.title}</td>
          <td>{items.status ? "private" : "public" }</td>
          <td><input type="checkbox" defaultChecked={items.status} onClick={changestatus.bind(this,items._id,items.status)} /></td>
          <td>{items.status ? "Yes" : "No" } </td>
          <td>{items.language}</td>
          <td><button onClick={deleteRepos.bind(this,items._id)} >Delete</button> </td>
          </tr>
        </React.Fragment>
        
    
      )
    }
  }