import React, { Component } from "react";

export default class AddRepo extends Component {
  addRepo = e => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const language = document.getElementById('language').value;
    const state = document.getElementById('state').value;
  //  console.log(state)

    if (title.length > 0 && language.length > 0 && state !== "")
      this.props.addRepo({ title, language, state });
  };

  render() {
    return (
      <div>
        <form
          style={{
            padding: "25px"
          }}
          className="form-inline align-self-center  "
        >
          <div className="input-group">
            <input
            id="title"
              className="m-2"
              type="text"
              placeholder="Repository title"
            />
            <input
            id="language"
              className="m-2"
              type="text"
              placeholder="Repository language"
            />
            <select
              id="state"
              className="custom-select m-2"
            >
              <option value='true' >Private</option>
              <option value='false' >Public</option>
            </select>
            <button
              className="btn btn-outline-success btn-lg"
              type="submit"
              onClick={this.addRepo}
            >
              Add Repository
            </button>
          </div>
        </form>
      </div>
    );
  }
}
