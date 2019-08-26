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

        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#zzz">
  Launch demo modal
</button>

<div className="modal fade" id="zzz"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <h1 className="text-danger">Are You Shore</h1>
        <p className="text-danger">did you wont to delet this</p>
      </div>
      <div className="modal-footer">
        <button type="button" onClick={deleteRepo.bind(this, _id)} data-dismiss="modal" className="btn btn-danger m-auto">Yes Delete</button>
      </div>
    </div>
  </div>
</div>

     
          {/* <button
            onClick={deleteRepo.bind(this, _id)}
            className="btn btn-danger"
          >
            X
          </button> */}
        </td>
      </tr>
    );
  }
}
