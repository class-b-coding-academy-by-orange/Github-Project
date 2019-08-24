import React, { Component } from 'react';


export default class AddRepo extends Component {

    submitHandler = (e) => {
        e.preventDefault();

        const title = this.titleInput.value;
        const language = this.languageInput.value;
        const state = this.statusInput.value;

        if (title.length > 0 && language.length > 0 && state !== "")
            this.props.addRepo({ title, language, state });
            
        this.titleInput.value = "";
        this.languageInput.value = "";
        this.statusInput.value = "";
    }

    render() {
            const {addRepo} = this.props;
        return (
            <div>
                <form
                    style={{
                        padding: "25px",
                    }}
                    className="form-inline align-self-center  "
                    onSubmit={this.submitHandler}
                >
                    <div className="input-group">
                        <input
                            className="m-2"
                            ref={val => (this.titleInput = val)}
                            type="text"
                            placeholder="Repository title"
                        />
                        <input
                            className="m-2"
                            ref={val => (this.languageInput = val)}
                            type="text"
                            placeholder="Repository language"
                        />
                        <select
                            className="custom-select m-2"
                            ref={val => (this.statusInput = val)}
                        >

                            <option value="true">Private</option>
                            <option value="false">Public</option>
                        </select>
                        <button className="btn btn-outline-success btn-lg" type="submit" onClick = {addRepo}>
                            Add Repository
            </button>
                    </div>
                </form>
            </div>
        )
    }


}
