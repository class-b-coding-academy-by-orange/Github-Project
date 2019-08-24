import React, {Component} from 'react';
import TableItems from './TableItems';

class Table extends Component {
    render(){
        const {myData}=this.props
    return (
        <div>
            <table style={{width:'50%',margin:'auto'}} className="table">
              <thead>
                <tr>
                  <th scope="col">#num</th>
                  <th scope="col">Name</th>
                  <th scope="col">Repo State</th>
                  <th scope="col">Check</th>
                  <th scope="col">Private</th>
                  <th scope="col">language</th>

                </tr>
              </thead>
<tbody>
             {myData.map((Element,i)=>{
               return <tr><TableItems myData={Element} key={i} num={i}/></tr>
            })}
            </tbody>
            </table>

        </div>
    )
}}

export default Table;
