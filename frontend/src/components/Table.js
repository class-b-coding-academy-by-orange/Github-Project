import React, { Component } from 'react';
import Row from './Row';
export default class Tabel extends Component {
  render() {
    const { repo, UpdateRepo, DeleteRepo } = this.props;

    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Number</th>
              <th scope="col">Title</th>
              <th scope="col">Repo status</th>
              <th scope="col">Check</th>
              <th scope="col">Is Private</th>
              <th scope="col">Language</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {repo.map((repo, i) => {
              return (
                <Row
                  key={i}
                  number={i + 1}
                  DeleteRepo={DeleteRepo}
                  UpdateRepo={UpdateRepo}
                  repo={repo}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
