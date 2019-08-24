import React, { Component } from 'react'
import Table from './Table'
export default class Add extends Component {
 

    state = {

        repoTitle:"",
        repoLanguage:"",
        repoState:false,
        done:false

    }

    

    title = (e) => {
       
        this.setState ({
            repoTitle:e.target.value
        })
        
     
    }

    language = (e) => {
        this.setState ({
            repoLanguage:e.target.value
        })
    }

    rstate = (e) => {
        if (e.target.value==="true"){
            this.setState ({
                repoState:true
            })}
            else 
            {
                this.setState ({
                    repoState:false
            })}    }




            


            send =() =>{

              


                this.setState({
                    done:true
                }
                    )
            } 




    render() {
        
        return (
            <>

         <form style={{display:"flex", justifyContent: 'space-between', flexWrap:'wrap', margin:'20px' }}>
         <input  required style={{flex:1,margin:'2px'}} type="text" className="form-control form-control-lg" id="inlineFormInput" placeholder="Repo Title" 
         onChange={this.title}
         />

         <input required style={{flex:1,margin:'2px'}} type="text" className="form-control form-control-lg" id="inlineFormInput" placeholder="Repo Language"
         onChange={this.language}
         />


         <select required style={{flex:1,margin:'2px'}} className="form-control form-control-lg"
         onChange={this.rstate}
         >
         <option value="" disabled selected>Repo Status (Private/Public)</option>

          <option value = "true">Private</option>
          <option value = "false">Public</option>

           </select>

           <button style={{flex:1.25,margin:'2px'}} type="submit" className="btn btn-primary btn-lg" onClick={this.send}>Add Repo</button>
          

           </form>

           <center>
           <button style={{width:'35%'}} type="button" 
                className="btn btn-success btn-lg">
                    Get All Repos
                    </button></center>
                    <br/>
                    
                


                    {this.state.done ? (
        <Table values={ [this.state.repoTitle,this.state.repoLanguage,this.state.repoState] } />
      ) : (
        <Table values="noValues" />
      )}
                
                
                
            </>
        )
    }
}
