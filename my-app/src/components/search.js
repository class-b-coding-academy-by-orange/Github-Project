import React, { Component } from 'react';

class earch extends Component {
    state = {
    }

    submitHandler = (e) => {
        e.preventDefault();

        const input = document.getElementById('username')
        this.props.getUsername(input.value)
    }

    render() {
        return (
            <div className="App">
                <form onSubmit={this.submitHandler}>
                    <input id="username" type="text" />
                    <button>Search</button>
                </form>
            </div>
        );
    }
}

export default Search;
