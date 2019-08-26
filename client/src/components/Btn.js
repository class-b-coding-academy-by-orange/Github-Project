import React, { Component } from "react";

class Btn extends Component {
  deleteHandler = e => {
    console.log(e.target.id);
    this.props.delete(e.target.id);
  };

  render() {
    // console.log(this.props.deleteId);
    return (
      <div>
        <button
          id={this.props.deleteId}
          type="button"
          className="btn btn-danger"
          onClick={this.deleteHandler}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Btn;
