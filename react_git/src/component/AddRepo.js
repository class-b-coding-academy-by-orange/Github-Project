import React, { Component } from 'react';


export default class AddRepo extends Component {
    state = {
        title: "",
        language:"",
        state:"true"
    }
    
    //on change values method
    addRepo = (event) => {
        this.setState({[ event.target.name]: event.target.value })

    }
    cleanInput = () => {
        this.setState({ title: "", language: "", state: "true" });
      };
   
    render() {
        const { title ,language,state} = this.state;
        const { postRepo} = this.props;
        const { addRepo,cleanInput} = this;


        return (
            <React.Fragment>
                        {/* Repo title input */}
                        <div className="form-group col-md-3">

                            <input type="text" name="title" value={title}
                            onChange={addRepo} className="form-control"  placeholder="Repo title .."
                            style={{ width: '150px', marginRight: "10px" }}
                                 />
                        </div>

                        {/* Repo language input */}
                        <div className="form-group col-md-3">

                            <input type="text" name="language" value={language}
                            onChange={addRepo} className="form-control" placeholder="Repo language .."
                             style={{ width: '150px',marginRight: "10px" }}
                               />
                        </div>

                        {/* Select Repo Status from dropdown list */}
                        <div className="form-group col-md-3">
                                <select id="inputState" className="form-control"
                                onChange={addRepo}
                                name="state" value={state} style={{ width: '190px'}}>
                                    <option value="" disabled selected >Select Repo Status</option>
                                    <option value="Private">Private</option>
                                    <option value="Public">Public</option>
                                </select>
                        </div>

                        {/* Add Repo button */}
                        <div className="form-group col-md-3">
                            <button type="submit" className="btn btn-primary" 
                            onClick={postRepo.bind(
                                this,
                                title,
                                language,
                                state === "true" ? true : false,
                                cleanInput
                              )} 
                              style={{ marginLeft: '50px' }}>Add Repo</button>
                        </div>
                   

            </React.Fragment>
        );
    }
}