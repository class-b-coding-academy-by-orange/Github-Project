import React, { Component } from "react";

class TableItem extends Component {
  state = {
    IsPrivate: this.props.data.isPrivate
  };

  // this function if the application will not change the values in database (changing the private status)
  change = () => {
    if (this.state.IsPrivate === true) this.setState({ IsPrivate: false });
    else this.setState({ IsPrivate: true });
  };

  render() {
    // console.log(this.props.data._id);
    return (
      <>
        <td>{this.props.ID}</td>
        <td>{this.props.data.title}</td>
        <td>{this.state.IsPrivate ? `PRIVATE` : "PUBLIC"}</td>
        <td>
          <input
            type="checkBox"
            checked={this.state.IsPrivate}
            // defaultChecked={this.state.IsPrivate}
            onClick={this.change}
            name={`isPrivate`}
          />
        </td>
        <td>{this.state.IsPrivate ? `TRUE` : `FALSE`}</td>
        <td>{this.props.data.language}</td>
        <td>
          <button
            onClick={this.props.deleteData.bind(this, this.props.data._id)}
          >
            delete
          </button>
        </td>
      </>
    );
  }
}

export default TableItem;
