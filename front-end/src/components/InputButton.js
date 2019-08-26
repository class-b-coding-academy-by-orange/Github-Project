import React, { Component } from "react";

class AddValue extends Component {
  submitHandler = e => {
    e.preventDefault();

    const title = this.titleInput.value;
    const language = this.languageInput.value;
    const state = this.statusInput.value;

    if (title.length > 0 && language.length > 0 && state !== "")
      this.props.addRepo({ title, language, state });

    this.titleInput.value = "";
    this.languageInput.value = "";
    this.statusInput.value = "";
  };

  render() {
    const { submitHandler } = this;
    const { getRepos } = this.props;

    return (
      <div>
        <form
          style={{
            padding: "20px",
            borderRadius: "20px"
          }}
          className="form-inline align-self-center"
          onSubmit={submitHandler}
        >
          <div className="input-group">
            <input
              className="m-1"
              ref={elem => (this.titleInput = elem)}
              type="text"
              placeholder="Repository title"
            />
            <input
              className="m-1"
              ref={elem => (this.languageInput = elem)}
              type="text"
              placeholder="Repository language"
            />
            <select
              className="custom-select m-1"
              ref={elem => (this.statusInput = elem)}
            >
              <option value="">Repo Status (Private/Public)</option>
              <option value="true">Private</option>
              <option value="false">Public</option>
            </select>
            <button className="btn btn-outline-danger m-1" type="submit">
              Add Repository
            </button>
          </div>
        </form>

        <div className="mt-3">
          <button
            onClick={getRepos}
            className="btn btn-outline-primary m-1"
            type="submit"
          >
            Get All Repos
          </button>
        </div>
      </div>
    );
  }
}

export default AddValue;
