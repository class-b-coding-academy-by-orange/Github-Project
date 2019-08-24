import React, {Component} from 'react';

class TableItems extends Component {
    render(){
      const {myData,num}=this.props      
    return ( 
    <React.Fragment>  
 
  <td>{num+1}</td>
 <td>{myData.title}</td>
 <td>{myData.private?"private":"public"}</td>
 <td><input type="checkbox" checked={myData.private}/></td>
 <td>{myData.private?"YES":"NO"}</td>
 <td>{myData.language}</td>

   </React.Fragment> 
   )
}}

export default TableItems;
