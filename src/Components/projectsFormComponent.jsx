import React from 'react';
import {createProject} from '../store/actions/projectActions';
import { connect } from 'react-redux';
import FormInput from './formInputComponent'

class ProjectForm extends React.Component {
    constructor(){
    super()
    this.state = {
       eID : '',
       name : '',
       location : '',
       created : '',
       updated : ''
        }
    }

    handleChange = (event) => {
        const nam = event.target.name;
        const val = event.target.value;
        this.setState({[nam]: val}, ()=>{
        //    console.log(val); 
        })   
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        // for (let key in this.state){
        //     console.log(key, this.state[key])
            
        // } 
        this.props.createProject(this.state);
        Object.keys(this.state).map((key)=>{
            this.setState({
            [key]: ''
            })
        })
       
        }

    render(){
        return (
            <div>
            <h1>Form Component</h1>
            <form onSubmit={this.handleSubmit}>
            {Object.keys(this.state).map((key)=>{           
                return(
                <FormInput
                    id={key}
                    name={key}
                    label={key}
                    key={key}
                    value={this.state[key]}
                    handleChange={this.handleChange}
                    type="text" />
                )
            })}    
                <button>Submit</button>
            </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm)
