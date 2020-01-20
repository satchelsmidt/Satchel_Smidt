import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import this to create redux store
import {createStore} from 'redux';
//import this to integrate store w/ react app
import {Provider} from 'react-redux';
//import our reducer
import rootReducer from './reducers/rootReducer'

//create our store
const store = createStore(rootReducer);

//Wrap app component in Provider tag
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
