import React, { Component } from 'react';
export default class AddRepo extends Component {


    state = {
        title: '',
        language:'',
        repostate:false
      }

      onChange = (e) => {
        console.log(e.target.value);
        this.setState({[e.target.name]: e.target.value });
        console.log(this.state)
      };

    //   onChange = (e) => {
    //     this.setState({
    //       title: e.target.value
    //     });
    // }
    //     onChange = (e) => {
    //         this.setState({
    //           language: e.target.value
    //         });
    //     }
    //         onChange = (e) => {
    //             this.setState({
    //               repostate: e.target.value
    //             });
    //   }

      // resetInput = () => {
      //   this.setState({
      //     title: '',language:'',repostate:''
      //   })
      // }
      add=(e)=>
      {
        e.preventDefault();
               this.props.addrepo(this.state)
               console.log("state",this.state)
      }
      render() {
      
        const { state, onChange, resetInput } = this
        const { title ,language,repostate} = this.state;
        const { addrepo } = this.props;
        return (
          <div>
            <form>
            <input type="text" name='title' onChange={onChange} />
            <input type="text" name='language' onChange={onChange} />
            <select name='repostate'  onChange={onChange}>
            
                     <option value="true">Private</option>
                     <option value="false">Public</option>
                    </select>
            <button onClick={this.add}>Button</button>
            </form>
            <button type="submit" onClick={this.props.getRepo}>
          Get ALL Repos
        </button>
          </div>
        )
      }
    }




    