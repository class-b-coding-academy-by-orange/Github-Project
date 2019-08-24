import React ,{Component}from 'react';
import TabelItem from './TabelItem';

class Tabel extends Component{
  state={}

  render(){
  return (
  <div>
        <table className="table table-sm table-bordered table-hover">
   <thead className="thead-dark">
        <tr>
    <th >Number</th>
    <th >Title</th>
    <th>State</th>
    <th  >Check</th>
    <th> Is Private</th>
    <th >Language</th>
    <th  >Delete</th>
    
  </tr> 
  </thead>   
  <tbody>
  {this.props.data.map((elem,id)=> < TabelItem elem={elem} key={id} id={id} remove={this.props.remove} toggel={this.props.toggel}/>)}
  </tbody>
            </table> 
      
      
    </div>
  );
}
}
export default Tabel;
