import React, { Component } from 'react';







export default class Item extends Component {


    render() {
        const {it,n}=this.props;
      return (
        <tr>

              <td>{n+1}</td>
       <td>{it.title}</td>
       <td>{it.status ? "private" : "public" }</td>
       <td><input type="checkbox" defaultChecked={it.status}  /></td>
       <td>{it.status ? "yes" : "no" } </td>
       <td>{it.language}</td>
       <td><button  >Delet</button> </td>
       </tr>
    
     
 
      )
    }
   
   
  }