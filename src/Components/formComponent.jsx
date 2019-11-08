import React from 'react';
import {createDocument} from '../store/actions/documentActions';
import { connect } from 'react-redux';
import FormInput from './formInputComponent'
import { useFirestore } from 'react-redux-firebase'

class Form extends React.Component {
    constructor(props){
    super()
    this.state = props.documentFields;
        
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
        console.log(this.props.collection)
        // this.props.createDocument(this.state, this.props.collection);
        saveToFirestore(this.props.collection, this.props);
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

function saveToFirestore(collection, doc){
    const firestore = useFirestore();
    firestore.collection(`${collection}`).add(doc);
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createDocument: (doc, collection) => dispatch(createDocument(doc, collection))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)
