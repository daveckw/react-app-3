import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import {deleteDocument} from '../store/actions/documentActions';
import { useFirestoreConnect } from 'react-redux-firebase'
import { useSelector } from 'react-redux'

class Table extends React.Component {
    constructor(props){ //props = collection, itemsToDisplay
    super();
    
    };

    handleClick = (event) => {
        event.preventDefault();
        const itemID = event.target.getAttribute("data-index"); //get user ID
        console.log("Delete Button clicked", itemID);
        this.props.deleteDocument(itemID, `${this.props.items}`);
    }

    render(){
        const items = this.props.items;
        const collection = this.props.collection;
        // console.log(items);
        // console.log(collection);
        return(
        <div>
            <h1>Table Component</h1>
            <ul>
            {collection && collection.map((doc)=>{
                return (
                    <li key={doc.id}>
                        {doc.id} | {doc.name}
                        <button onClick={this.handleClick} data-index={doc.id} id='delete'>Delete</button>
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
        collection: state.firestore.ordered.commissionStructure,
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
        { collection: "commissionStructure", orderBy: ['name', 'desc'] }
    ])
)(Table)