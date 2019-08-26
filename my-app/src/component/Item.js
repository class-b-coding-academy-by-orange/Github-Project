import React, { Component } from 'react';







export default class Item extends Component {


 


    render() {
        const {it,n}=this.props;
      return (
        <tr>

              <td>{n+1}</td>
       <td>{it.title}</td>
       <td>{it.status ? "PRIVATE" : "PUBLIC" }</td>
       <td><input type="checkbox" defaultChecked={it.status} onClick={this.props.changestatus.bind(this,it._id,it.status)} /></td>
       <td>{it.status ? "YES" : "NO" } </td>
       <td>{it.language}</td>
       <td><button onClick={this.props.deletdata.bind(this,it._id)} >Delet</button> </td>
       {/* <td>{it._id}</td> */}
       </tr>
    
      )
    }
  }