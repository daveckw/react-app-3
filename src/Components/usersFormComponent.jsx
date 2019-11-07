import React from 'react';
import {createUser} from '../store/actions/userActions';
import { connect } from 'react-redux';
import FormInput from './formInputComponent'

class UserForm extends React.Component {
    constructor(){
    super()
    this.state = {
        eID: '',
        name: '',
        preferredName: '',
        position: '',
        icNumber: '',
        email: '',
        phoneNumber: '',
        birthday: '',
        immediateUpline: '',
        referrer: '',
        location: '',
        created: '',
        updated: ''
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
        this.props.createUser(this.state);
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
        createUser: (user) => dispatch(createUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserForm)
