import React, { Component } from 'react';


export default class AddRepo extends Component {

    render() {
         const { getAllRepos} = this.props;
        return (
            <React.Fragment>
                
                {/* Gett All Repos Button */}
                <div className="row" >
                    <div className="form-group col-md-6">
                        <button type="submit" className="btn btn-primary"
                            onClick={getAllRepos}
                            style={{ marginLeft: '50px', width: "170px" }}>Get All Repos</button>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}