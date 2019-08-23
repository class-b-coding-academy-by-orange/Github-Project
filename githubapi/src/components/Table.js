import React, { Component } from "react";
import TableItem from "./TableItem";

class Table extends Component {
  state = {
    title: "",
    lang: "",
    isPrivate: "Private"
  };

  handleChange = e => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  clear = () => {
    this.setState({ title: "", lang: "", isPrivate: "Private" });
  };

  render() {
    const { allData } = this.props;

    return (
      <>
        <div
          className="Inputs"
          style={{
            border: "solid black 1px",
            textAlign: "center",
            width: "40%",
            margin: "auto",
            maxWidth: "400px",
            marginTop: "20px",
            minWidth: "320px",
            padding: "13px"
          }}
        >
          <label htmlFor="title">Repo title: </label>
          <input
            id="title"
            type="text"
            placeholder="Repo title"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="lang">Repo language: </label>
          <input
            id="lang"
            type="text"
            placeholder="Repo language"
            name="lang"
            value={this.state.lang}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="status">Repo status: </label>

          <select
            onChange={this.handleChange}
            name="isPrivate"
            id="status"
            value={this.state.isPrivate}
          >
            <option value="Private">Private</option>
            <option value="Public">Public</option>
          </select>
          <br />

          <button
            onClick={this.props.sendData.bind(
              this,
              this.state.title,
              this.state.lang,
              this.state.isPrivate === "Private" ? true : false,
              this.clear
            )}
          >
            Create
          </button>
        </div>
        <br />
        <br />
        <button
          onClick={this.props.getData}
          style={{ display: "block", margin: "auto" }}
        >
          Get All Repos
        </button>

        <div className="TableDiv">
          <table
            className="Table"
            border="1"
            style={{ display: this.props.allData.length ? "table" : "none" }}
          >
            <thead>
              <tr>
                <th>Number</th>
                <th>Name</th>
                <th>Repo status</th>
                <th>Check</th>
                <th>is Private</th>
                <th>Language</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {allData.map((item, index) => (
                <tr key={index}>
                  <TableItem
                    data={item}
                    ID={index + 1}
                    key={index}
                    deleteData={this.props.deleteData}
                    updateData={this.props.updateData}
                  />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default Table;
