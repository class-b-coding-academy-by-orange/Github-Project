import React, { Component } from "react";

export default class Row extends Component {
  render() {
    const { number, deleteRepo } = this.props;
    const { _id, title, language, state } = this.props.repo;
    return (
      <tr>
        <td className="bg-primary">{number} </td>
        <td className="bg-success">{title}</td>
        <td className="bg-warning">{state ? "PRIVATE" : "PUBLIC"}</td>
        <td>
          <input type="checkbox"/>
        </td>
        <td className="bg-danger">{state ? "YES" : "NO"}</td>
        <td className="bg-primary">{language}</td>
        <td>
          <button onClick={deleteRepo.bind(this, _id)} type="button" className="btn btn-warning btn-circle">
            <i className="glyphicon glyphicon-remove" />
          </button>
        </td>
      </tr>
    );
  }
}
