import React, { Component } from "react";
export default class Form extends Component {
  insertRepo = event => {
    event.preventDefault();
    const title = document.getElementById('title');
    const language = document.getElementById('language');
    const state = document.getElementById('state');

    this.props.insertRepo({
      title: title.value,
      language: language.value,
      state: state.value
    });
  };

  render() {
    const { getRepo } = this.props;

    return (
      <div>
        <form className="form-inline">
          <div className="input-group">
            <input
              id="title"
              type="text"
              placeholder="Repository title"
            />
            <input
              id="language"
              type="text"
              placeholder="Repository language"
            />
            <select id="state" className="custom-select">
              <option value="true">Private</option>
              <option value="false">Public</option>
            </select>
            <button className="btn btn-primary" onClick={this.insertRepo} >
              Add Repository
            </button>
          </div>
        </form>
        <button className="btn btn-success" type="submit" onClick={getRepo} >
          Get Repos
        </button>
      </div>
    );
  }
}
