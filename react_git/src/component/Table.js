import React, { Component } from 'react';
import RowRepos from './RowRepos';

export default class Table extends Component {

  render() {
    const { deleteRepo, updateRepo, repos} = this.props;
    
    return (
      <React.Fragment> 
        <table className="table table-dark" style={{marginTop:"10px"}}>
          <thead >
            <tr>
              <th scope="col">Number</th>
              <th scope="col">Title</th>
              <th scope="col">Repo status</th>
              <th scope="col">Check</th>
              <th scope="col">isPrivate</th>
              <th scope="col">language</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>

            {/* render RowRepos component */}

           {repos.map((repo,id)=>
            <RowRepos repo={repo} id={id+1} key={id}
              deleteRepo={deleteRepo}
             updateRepo={updateRepo}/>)}
             
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}