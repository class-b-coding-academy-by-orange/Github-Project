import React, { Component } from 'react';
import TableRow from './TableRow';

export default class Table extends Component{

  render() {
    const { repos, deleteRepo } = this.props;

    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title </th>
              <th scope="col">Repo status</th>
              <th scope="col">Check</th>
              <th scope="col"> is Private </th>
              <th scope="col"> Language </th>
              <th scope="col"> Delete </th>
            </tr>
          </thead>
          <tbody>
            {repos.map((repo, index) => {
              return (
                <TableRow
                  key={repo._id}
                  number={index + 1}
                  repo={repo}
                  
                  //updateRepo={updateRepo}
                  deleteRepo={deleteRepo}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

