import React, { Component } from 'react';

class Table extends Component {
    state = {
    }

    render() {
        return (
            <div className="App">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Language</th>
                            <th scope="col">URL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.data.map((elem, index) => {
                                return (
                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td>{elem.name}</td>
                                        <td>{elem.language}</td>
                                        <td><a href={elem.html_url} className="btn btn-primary btn-sm" role="button" aria-pressed="true">Go to {elem.name}</a> </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;