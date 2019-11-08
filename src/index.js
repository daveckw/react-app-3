import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './store/reducers/rootReducer'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import { useFirestore } from 'react-redux-firebase'
import { getFirebase } from 'react-redux-firebase';
import firebase from './config/fbConfig'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore' //

// const store = createStore(rootReducer,
//     compose(
//         applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
//         reactReduxFirebase(fbConfig, {
//             userProfile: 'users', 
//             useFirestoreForProfile: true,
//             attachAuthIsReady: true
//         }),
//         reduxFirestore(fbConfig) // redux bindings for firestore
//     )
// );

// react-redux-firebase config
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
    attachAuthIsReady: true
  }

const middlewares = [
    thunk.withExtraArgument(getFirebase)
  ]

const initialState = {}
const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middlewares),
    )
  );

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
}

// Setup react-redux so that connect HOC can be used
ReactDOM.render(
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <App />
        </ReactReduxFirebaseProvider>
      </Provider>,
      document.getElementById('root')
 )

    
