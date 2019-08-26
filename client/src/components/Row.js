import React, { Component } from "react";
import Btn from "./Btn";

class Row extends Component {
  state = {};

  handleToggle = i => {
    // console.log(i);
    this.props.flip(i);
  };

  render() {
    // console.log(this.props.deleteId);
    return (
      <tr>
        <td> {this.props.id} </td>
        <td> {this.props.name}</td>
        {this.props.private ? <td> private </td> : <td> public </td>}
        {this.props.private ? (
          <td>
            {" "}
            <input
              onChange={() => this.handleToggle(this.props.deleteId)}
              type="checkbox"
              aria-label="Checkbox for following text input"
              checked={this.props.private}
            />{" "}
          </td>
        ) : (
          <td>
            {" "}
            <input
              onChange={() => this.handleToggle(this.props.deleteId)}
              type="checkbox"
              aria-label="Checkbox for following text input"
              checked={this.props.private}
            />{" "}
          </td>
        )}
        {this.props.private ? <td> yes </td> : <td> no </td>}
        <td> {this.props.lang} </td>
        <td>
          <Btn deleteId={this.props.deleteId} delete={this.props.delete} />
        </td>
      </tr>
    );
  }
}

export default Row;

//
