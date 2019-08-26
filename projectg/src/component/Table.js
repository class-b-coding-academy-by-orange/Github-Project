import React, { Component } from 'react'
import TableItem from './TableItem';

export class Table extends Component {
    state= {
        title:[],
        language:"",
        private:"",
        status:""

    }
    change= (e)=>{ 

         this.setState({
          [e.target.name] : e.target.value,
        });
        if(this.state.Private!=="private")
      {
        this.setState({status : false,})
      }
    if(this.state.Private!=="Public")
      {
        this.setState({status : true,});
      }
    }

    reset=()=>{
      this.setState({title: "",
      language: "",
      Private: "",
      status: null,})
    }


    render() {
 const {title,language,status,Private}=this.state
        return (
           <> 
        <div>
        
        <input name="title"  placeholder="repo title" value={title} onChange={this.change} />
        <input name="language"  placeholder="repo language" value={language} onChange={this.change} />
      
        <select  name="Private" value={Private} onChange={this.change}>
        <option value="select">rebo status</option>
        <option value="Public">Public</option>
         <option  value="private"  >private</option>
        </select>

        <button type="submit"  onClick={this.props.addData.bind(this,title,language,status,this.reset)} >add repo</button>

      </div>
            <div>
            <table>
            <thead>
            <tr>
                 <th>Number</th>
                 <th>name</th>
                 <th>repo state</th>
                 <th>check </th>
                 <th> private</th>
                 <th> language</th>
                 <th>delete</th>
            </tr>
         
            </thead>

            <tbody>
            {this.props.repo.map((item, Key) => {

            return <TableItem it={item} key={Key} n={Key} deletdata={this.props.deletdata} changestatus={this.props.updatedata} />
            })} 
            </tbody>

     </table>
            </div>
            </>
        )
    }
}

export default Table
