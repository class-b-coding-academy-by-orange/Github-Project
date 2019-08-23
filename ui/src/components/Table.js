import React, { Component } from "react";
import Row from "./Row";

class Table extends Component {
  render() {
    const { repos, updateRepo, deleteRepo } = this.props;

    return (
      <div className="mt-5">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Repo Status</th>
              <th scope="col">Check</th>
              <th scope="col">Is Private</th>
              <th scope="col">Language</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {repos.map((repo, index) => {
              return (
                <Row
                  key={repo._id}
                  number={index + 1}
                  repo={repo}
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
