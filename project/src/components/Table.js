import React, { Component } from 'react';
import TableItems from './TableItems';



export default class Table extends Component {

  state = {
    title: "",
    language: "",
    // Private: true,
    status: false
  }


  changeRepos = async (e) => {
    console.log("STATE: ", e.target.value)
    
    await this.setState({
      [e.target.name]: e.target.value,
    });

    // if(this.state.status==="private")
    //   {
    //     this.setState({status : true})
    //   }
    // if(this.state.status==="Public")
    //   {
    //     this.setState({status : false});
    //   }
  }

  resetRepos = () => {
    this.setState({
      title: "",
      language: "",
      // Private: "",
      status: null
    })
  }



  render() {
    const { title, language, status } = this.state
    const { changeRepos, resetRepos } = this
    const { addRepos, repos, deleteRepos, updateRepos } = this.props
    console.log("STATE FROM TABLE", status)
    return (
      <div>
          {console.log("REPO", repos)}
          <div style={{ display: "flex", justifyContent: 'space-between', flexWrap: 'wrap', margin: '20px' }}>
            <input style={{ flex: 1, margin: '2px' }} name="title" className="form-control form-control-lg" id="inlineFormInput" placeholder="repo title" value={title} onChange={changeRepos} />

            <input style={{ flex: 1, margin: '2px' }} name="language" className="form-control form-control-lg" id="inlineFormInput" placeholder="repo language" value={language} onChange={changeRepos} />

            <select name="status" onChange={changeRepos}>
              <option value="false">Public</option>
              <option value="true">Private</option>
            </select>

            <button type="submit" className="btn btn-info btn-rounded" onClick={addRepos.bind(this, title, language, status, resetRepos)} >Add Repo</button>
          </div>


          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Repo status</th>
                <th scope="col">Check</th>
                <th scope="col">is Private</th>
                <th scope="col">Language</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>

            <tbody>
              {repos.map((elements, index) => {
                return <TableItems items={elements} id={index} deleteRepos={deleteRepos} changestatus={updateRepos} />
              })}
            </tbody>
          </table>

        </div>
      
    )
  }
  //}
}