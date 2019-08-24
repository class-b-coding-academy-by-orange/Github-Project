import React, { Component } from 'react'
import TableItem from './TableItem';

export default class Table extends Component {
    render() {
      const {values} = this.props;
      console.log(values);
        return (
            <div>

                <table className="table table-bordered">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Repo status</th>
      <th scope="col">Check</th>
      <th scope="col">isPrivate</th>
      <th scope="col">Language</th>
      <th scope="col">Delete</th>

     

    </tr>
    
  </thead>

  {values !== "noValues" ? (
        <TableItem item={ values } />
      ) : (
        <TableItem item="noValues" />
      )}
               



</table>
<tbody>



  </tbody>

            </div>
        )
    }
}
