import React, { Component } from "react";

class Search extends Component {
  state = {};

  submitHandler = e => {
    e.preventDefault();
    const input = document.getElementById("username");
    this.props.getUsername(input.value);
    
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.submitHandler}>
          <div className="input-group mb-3">
            <input
              id="username"
              type="text"
              className="form-control"
              placeholder="github username"
              aria-label="github username"
              aria-describedby="button-addon2"
            />
            <div className="input-group-append">
              <button onClick={this.submitHandler}
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
              >
                Search
              </button>
            </div>
          </div>
          {/* <input id="username" type="text" /> */}
          {/* <button>Search</button> */}
        </form>
      </div>
    );
  }
}

export default Search;
