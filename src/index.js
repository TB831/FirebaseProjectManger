import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer'; // rootReducers which combines reducers
import thunk from 'redux-thunk' // Middleware 
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbConfig';


const store = createStore(rootReducer, 
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),  // withExtraArgument allows use to use extra middleware. eg. getFirebase/getFirestore. They are getting passed as an extra argument in projectActions.js. 
    reduxFirestore(fbConfig), // reduxFirestore, reactReduxFirebase act as store enhancers
    reactReduxFirebase(fbConfig, {attachAuthIsReady: true})
  )
); // Our single source of truth, Middleware Thunk added. Added Firebase/Firestore to our middleware

store.firebaseAuthIsReady.then(() => {  // Allows application to not render to the DOM until firebase is ready
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
  , document.getElementById('root'));
})


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
