import React, { Component } from "react";
import TableItem from "./TableItem";

class Table extends Component {
  state = {};

  render() {
    const { repos, updateRepo, deleteRepo } = this.props;
    return (
      <div className="App">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Repo Status</th>
              <th scope="col">Check</th>
              <th scope="col">isPrivate</th>
              <th scope="col">Language</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {repos.map((elem, index) => {
              return (
                <TableItem
                  key={repos._id}
                  number={index + 1}
                  repos={repos}
                  updateRepo={updateRepo}
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

export default Table;
