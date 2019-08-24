import React, { Component } from 'react'

export default class TableItem extends Component {

    
    render() {
      const {item} = this.props;

        return (
            <>

            


<tbody>
<tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td name="check"><center><input className="form-check-input"                              type="checkbox" value="" /></center>
        </td>
    </tr>

    <tr>
      <th scope="row">2</th>
      <td>Osaid</td>
      <td>Ayadi</td>
      <td name="check"><center><input className="form-check-input"                              type="checkbox" value="" /></center>
        </td>
        <td>Soso</td>
        <td>Momo</td>
        <td>x</td>
    </tr>
    

    <tr>
      <th scope="row">99999</th>
      <td>{item[0]}</td> 
      {item[2] ===true? (
        <td>PRIVATE</td>
        
      ) : (<td>PUBLIC</td> )}
      
        {item[2] ===true? (
        <td>
          <center><input className="form-check-input" 
          type="checkbox" 
          checked /></center>
        </td>
      ) : (
        <td>
           <center><input className="form-check-input" 
          type="checkbox" 
          /></center>
        </td> 
      )}

{item[2] ===true? (
        <td>YES</td>
        
      ) : (<td>NO</td> )}

      
      <td>{item[1]}</td>
      <td>x</td>

    </tr>
    

  </tbody>









            </>
        )
    }
}
