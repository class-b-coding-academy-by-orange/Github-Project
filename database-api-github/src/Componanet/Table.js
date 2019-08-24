import React, { Component } from 'react';
import Row from './Row';

export default class Table extends Component {




    render() {
        const { repos } = this.props;

        return (
            <div>
                <table class="table">

                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title </th>
                        <th scope="col">Repo status</th>
                        <th scope="col">Check</th>
                        <th scope="col"> in Private </th>
                        <th scope="col"> Language </th>
                        <th scope="col"> Delete </th>
                    </tr>

                    <tbody>

                        {repos.map((repo, index) => {
                            return (
                                <Row
                                    key={repo._id}
                                    number={index + 1}
                                    repo={repo}
                                //   updateRepo={updateRepo}
                                //   deleteRepo={deleteRepo}
                                />
                            );
                        })}
                    </tbody>
                </table>
            </div>
        )
    }


}
