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
      <div className=" m-3">
        <form className="form-inline">
          <div className="input-group">
            <input id="title" className="m-1" type="text" placeholder="Repo Title" />
            <input id="language" className="m-1" type="text" placeholder="Repo Language" />
            <select id="status" className="custom-select m-1">
              <option value="">Repo status (Private/Public)</option>
              <option value="true">Private</option>
              <option value="false">Public</option>
            </select>
          </div>
          <button className="btn btn-outline-success ml-2" onClick={addRepo}>
            Add Repository
          </button>
        </form>
        <button className="btn btn-outline-primary mt-2" type="submit" onClick={getRepos}>
          Get ALL Repos
        </button>
      </div>
    );
  }
}
