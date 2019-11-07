import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import {deleteUser} from '../store/actions/userActions';

class Table extends React.Component {

    handleClick = (event) => {
        event.preventDefault();
        const userID = event.target.getAttribute("data-index"); //get user ID
        console.log("Delete Button clicked", userID);
        this.props.deleteUser(userID);
    }

    render(){
        const {users} = this.props
        // console.log(users);
        return(
        <div>
            <h1>Table Component</h1>
            <ul>
            {users && users.map((user)=>{
                return (
                    <li key={user.id}>
                        {user.id} | {user.preferredName} | {user.email} | {user.phoneNumber} |
                        <button onClick={this.handleClick} data-index={user.id} id='delete'>Delete</button>
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
        users: state.firestore.ordered.users,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteUser: (userID) => dispatch(deleteUser(userID))
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect([
        { collection: 'users', orderBy: ['name', 'desc'] }
    ])
)(Table)