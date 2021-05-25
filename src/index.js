import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import "bootstrap/dist/css/bootstrap.css"
import {createStore, applyMiddleware} from "redux";
import rootReducer from "./reducers/rootReducer";
import thunk from 'redux-thunk';
import {getFirebase, ReactReduxFirebaseProvider} from "react-redux-firebase";
import firebase from "./config/firebaseConfig";
import {createFirestoreInstance} from "redux-firestore";
import {useSelector} from "react-redux";
import {isLoaded} from "react-redux-firebase";


const store=createStore(rootReducer, applyMiddleware(thunk.withExtraArgument({getFirebase})))
const rrfProps={
    firebase,
    config: {},
    dispatch: store.dispatch,
    createFirestoreInstance,
}

function AuthIsLoaded({children}){
    const auth=useSelector(state => state.firebase.auth)
    if(!isLoaded(auth))
        return(
            <div className="text-center">
                <div
                    className="spinner-grow text-primary"
                    style={{width:'7rem', height:'7rem'}}
                        role="status">
                    <span className="sr-only">loading...</span>
            </div>
            </div>
        )
    return children
}


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <AuthIsLoaded>
      <App />
            </AuthIsLoaded>
        </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


