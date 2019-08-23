import React, { Component } from "react";

export class Row extends Component {
  render() {
    const { number, updateRepo, deleteRepo } = this.props;
    const { _id, title, language, state } = this.props.repo;

    console.log('STATE', state);
    return (
      <tr>
        <th scope="row">{number}</th>
        <td>{title}</td>
        <td>{state ? 'PRIVATE' : 'PUBLIC'}</td>
        <td style={{textAlign: 'center'}}>
          <input type="checkbox" onChange={updateRepo.bind(this, _id, !state)} checked={state}/>
        </td>
        <td>{state ? 'YES' : 'NO'}</td>
        <td>{language}</td>
        <td>
        <button onClick={deleteRepo.bind(this, _id)} className="btn btn-danger m-1">X</button>
        </td>
      </tr>
    );
  }
}

export default Row;
