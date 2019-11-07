import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import {deleteDocument} from '../store/actions/documentActions';

class ProjectTable extends React.Component {

    handleClick = (event) => {
        event.preventDefault();
        const itemID = event.target.getAttribute("data-index"); //get user ID
        console.log("Delete Button clicked", itemID);
        this.props.deleteDocument(itemID, "projects");
    }

    render(){
        const {projects} = this.props
        // console.log(users);
        return(
        <div>
            <h1>Table Component</h1>
            <ul>
            {projects && projects.map((project)=>{
                return (
                    <li key={project.id}>
                        {project.id} | {project.name} | {project.location} | 
                        <button onClick={this.handleClick} data-index={project.id} id='delete'>Delete</button>
                    </li>
                )
            })}
            </ul>
        </div>
        )
    }

}

const mapStateToProps = (state) => {
    // console.log("state",state);
    return {
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteDocument: (itemID, collection) => dispatch(deleteDocument(itemID, collection))
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect([
        { collection: 'projects', orderBy: ['name', 'desc'] }
    ])
)(ProjectTable)