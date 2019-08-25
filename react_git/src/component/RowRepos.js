import React, { Component } from 'react';


export default class RowRepos extends Component {

  render() {
    const {updateRepo, deleteRepo, id, repo }=this.props;
    return (

      <React.Fragment>
        
        {/* render each row inside table  */}
        <tr>

          <th scope="row">{id}</th>
          <td>{repo.title}</td>
          <td>{repo.state ? "PRIVATE" : "PUBLIC"}</td>

          <td><input type="checkbox" checked={repo.state}

            onClick={updateRepo.bind(
              this,
              repo._id,
              repo.state
            )}

          /></td>

          <td>{repo.state ? "YES" : "NO"}</td>
          <td>{repo.language}</td>


          <td><button

           onClick={deleteRepo.bind(
            this,
            repo._id
          )}

          >Delete Repo</button>
          </td>

        </tr>

      </React.Fragment>
    );
  }
}