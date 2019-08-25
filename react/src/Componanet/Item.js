import React, { Component } from "react";

export default class Item extends Component {
  render() {
    const { number, updateRepo, deleteRepo } = this.props;
    const { _id, title, status, language } = this.props.repo;
    console.log('origial', status);

    return (
      <tr>
        <td>{number}</td>
        <td> {title}</td>
        <td>{status ? "PRIVATE" : "PUBLIC"}</td>
        <td>
          {/* <input
            type="checkbox"
            checked={status}
            // checked={status}
          /> */}
          <input type="checkbox" onChange={updateRepo.bind(this, _id, !status)} checked={status}/>
        </td>
        <td>{status ? "YES" : "NO"}</td>
        <td>{language}</td>
        <td>
          <button
            onClick={deleteRepo.bind(this, _id)}
            className="btn btn-danger"
          >
            X
          </button>
        </td>
      </tr>
    );
  }
}
