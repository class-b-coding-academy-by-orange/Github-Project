import React, { Component } from 'react';

// {var i= 0}
class TableRow extends Component{

  render(){
    const {title,language,repostate,_id}=this.props.repo
  return (
    <div style={{width: '70%', margin: '0 auto'}}>
      <table className='table'>
        <tbody>
          <td> {this.props.number} </td>
          <td> {title} </td>
          <td > {(repostate ? 'Private' : 'Public')} </td>
          <td><input type='checkbox'></input></td>          
          <td > {(repostate? 'Yes' : 'No')} </td>
          <td> {language} </td>
          <button onClick={this.props.deleteRepo.bind(this, _id)} type="button" className="btn btn-warning btn-circle"></button>
         
        </tbody>=
      </table>
      {/* {console.log(this.props.repo)} */}
      {/* {console.log(this.props.key)} */}

    </div>
  );
}
}
export default TableRow;

