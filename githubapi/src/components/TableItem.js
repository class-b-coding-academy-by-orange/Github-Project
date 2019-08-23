import React, { Component } from "react";

class TableItem extends Component {
  state = {
    // IsPrivate: this.props.data.isPrivate // this key if the application will not change the values in database (changing the private status)
  };

  // this function if the application will not change the values in database (changing the private status)
  // change = () => {
  //   if (this.state.IsPrivate === true) this.setState({ IsPrivate: false });
  //   else this.setState({ IsPrivate: true });
  // };

  render() {
    // console.log(this.props.data._id);
    return (
      <>
        <td>{this.props.ID}</td>
        <td>{this.props.data.title}</td>
        <td>{this.props.data.isPrivate ? `PRIVATE` : "PUBLIC"}</td>{" "}
        {/*IsPrivate*/}
        <td>
          <input
            type="checkBox"
            checked={this.props.data.isPrivate} // IsPrivate
            // defaultChecked={this.state.IsPrivate}
            // onClick={this.change}
            onClick={this.props.updateData.bind(
              this,
              this.props.data._id,
              this.props.data.isPrivate
            )}
            name={`isPrivate`}
          />
        </td>
        <td>{this.props.data.isPrivate ? `TRUE` : `FALSE`}</td> {/*IsPrivate*/}
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
