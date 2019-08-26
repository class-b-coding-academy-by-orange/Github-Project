import React, { Component } from 'react'


export class TableItem extends Component {
    state = {

    }

    render() {
        const {item,index}=this.props;
        return (
           <>
           <tr>

<td>{index+1}</td>
<td>{item.title}</td>
<td>{item.status ? "private" : "public" }</td>
<td><input type="checkbox" defaultChecked={item.status} onClick={this.props.changestatus.bind(this,item._id,item.status)} /></td>
<td>{item.status ? "Yes" : "No" } </td>
<td>{item.language}</td>
<td><button onClick={this.props.deletData.bind(this,item._id)} >Delet</button> </td>

</tr>
           </>
        )
    }
}

export default TableItem
