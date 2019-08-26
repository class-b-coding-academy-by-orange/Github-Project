import React, { Component } from "react";

export default class Control extends Component {
  addRepo = e => {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const status = document.getElementById("status").value;
    const language = document.getElementById("language").value;
    // console.log(status);

    if (title.length > 0 && language.length > 0 && status.length > 0) {
      this.props.addRepo({ title, status, language }); // es6 object key/value
    }

  };

  render() {
    const { addRepo } = this;
    const { getRepos } = this.props;

    return (
      <div className=" m-3 text-center">
         <button className="btn btn-danger btn-lg d-block m-auto  " onClick={getRepos}>
          Get ALL Repos
        </button>
        <form className="form-inline justify-content-center mt-3">
          <div className="input-group">
            <input id="title" className="form-control" type="text" placeholder="Repo Title" />
            <input id="language" className="form-control" type="text" placeholder="Repo Language" />
            <select id="status" className="form-control">
              <option value="">Repo status (Private/Public)</option>
              <option value="true">Private</option>
              <option value="false">Public</option>
            </select>
          </div>
          <button className="btn btn-outline-success ml-2" onClick={addRepo}>
            Add Repository
          </button>
        </form>
       
      </div>
    );
  }
}
