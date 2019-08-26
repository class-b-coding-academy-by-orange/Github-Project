import React, { Component } from 'react';
class Row extends Component {
  render() {
    return (
      <>
        <tr>
          <td style={{ border: "1px solid black" }}> {this.props.number}</td>
          <td style={{ border: "1px solid black" }}>{this.props.repo.title} </td>
          <td style={{ border: "1px solid black" }}> {this.props.repo.state ? "PRIVATE" : "PUBLIC"}</td>
          <td style={{ border: "1px solid black" }}>{<input type='checkbox' checked={this.props.repo.state}
            onClick={this.props.UpdateRepo.bind(
              this,
              this.props.repo._id,
              this.props.repo.state
            )}></input>}</td>
          <td style={{ border: "1px solid black" }}> {this.props.repo.state ? "Yes" : "No"}</td>
          <td style={{ border: "1px solid black" }}>{this.props.repo.language}</td>
          <td style={{ border: "1px solid black" }}><button onClick={this.props.DeleteRepo.bind(this, this.props.repo._id)} className="btn btn-danger">Delete </button></td>
        </tr>
      </>
    );
  }
}
export default Row;