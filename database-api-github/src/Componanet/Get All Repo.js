import React, { Component } from 'react';


export default class GetAllRepo extends Component {

    render() {
            const {getRepos} = this.props;
        return (
            <div>


                <button
                    // onClick={getRepos}
                    className="btn btn-outline-primary m-1"
                    type="submit"
                    style={{textAlign:"center"}}
                    onClick ={getRepos}
                >
                    Get All Repos
          </button>

            </div>
        )
    }


}
