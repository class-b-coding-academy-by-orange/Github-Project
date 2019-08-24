import React, { Component } from 'react';


export default class Row extends Component {

    render() {
                const {repo,number} = this.props
        return (


            <tr>
                <td class="bg-primary">{number} </td>
                <td class="bg-success">{repo}</td>
                <td class="bg-warning">PRIVATE</td>
                <td ><input type="checkbox" /></td>
                <td class="bg-danger">YES</td>
                <td class="bg-primary">HTML </td>
                <td ><button type="button" class="btn btn-warning btn-circle"><i class="glyphicon glyphicon-remove"></i></button></td>

            </tr>

        )
    }


}
