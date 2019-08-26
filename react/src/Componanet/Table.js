import React, { Component } from "react";
import Item from "./Item";

export default class Table extends Component {
  render() {
    const { repos, updateRepo, deleteRepo } = this.props;
    return (
      <div>
        <table className="table table-striped table-dark text-center">
          <thead>
            <tr>
              <th scope="col">num</th>
              <th scope="col">Title</th>
              <th scope="col">Repo status</th>
              <th scope="col">Check</th>
              <th scope="col">Private</th>
              <th scope="col">Language</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {repos.map((repo, i) => {
              return (
                <Item
                  key={i}
                  repo={repo}
                  number={i + 1}
                  deleteRepo={deleteRepo}
                  updateRepo={updateRepo}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
