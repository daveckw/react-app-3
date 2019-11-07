import authReducer from './authReducer'
import userReducer from './userReducer'
import {combineReducers} from 'redux'
import {firestoreReducer} from 'redux-firestore';
import {firebaseReducer} from 'react-redux-firebase'
import documentReducer from './documentReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    doc: documentReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer