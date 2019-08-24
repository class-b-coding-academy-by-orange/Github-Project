import React, {Component} from 'react';


class Search extends Component {
    state={
        user:''
    }
    userfunc=(e)=>{
        this.setState({
            user:e.target.value
        })
        console.log(this.state.user)
    }
    render(){
        
    return (
        <div>




            <div style={{width:'50%',margin:'auto'}}  className="input-group mb-3">

                <input  type="text" className="form-control" placeholder="write github username" aria-label="Recipient's username" aria-describedby="button-addon2"
                
                onChange={this.userfunc}/>

                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2"
                   
                    
                    onClick={this.props.userChange.bind(this,this.state.user)}

                    >Search</button>
                </div>

                
                
            </div>
    </div>
    )
}}

export default Search;
