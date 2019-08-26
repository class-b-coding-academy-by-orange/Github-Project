import React ,{Component}from 'react';
class TabelItem extends Component{
  state={

    
  }

   
  
  render(){
  return (
  <>
     <tr>
      <td>
        {this.props.id+1}
        
       </td>
       
       <td>
 {this.props.elem.title}

       </td>


      <td>
{this.props.elem.state? "PRAVATE":"PUBLIC"}
       </td>
       
       <td>
       <input type="checkbox" checked={this.props.elem.state} onChange={this.props.toggel.bind(this,this.props.elem.state,this.props.elem._id)} ></input>
       </td>
       <td>
       {this.props.elem.state? "YES":"NO"}
      
       </td>
     <td>
     {this.props.elem.language}
       </td>

    <td> 
      <button className="btn btn-outline-danger" onClick={this.props.remove.bind(this,this.props.elem)}>DELETE</button>
     </td>
       



    </tr>
    </>
  );
}
}
export default TabelItem;
