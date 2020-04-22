import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import Store from './store'
// import thunk from 'redux-thunk';
import {BrowserRouter,  Route} from 'react-router-dom'
import AddContact from './addnewcontact'
import ContactList from './ContactList'

// import { Router } from 'express';

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={Store}>
  <BrowserRouter>
  <Route exact path="/" component={App} />
  <Route  path="/allContacts" component={ContactList} />
  <Route  path="/newContact" component={AddContact} />
  </BrowserRouter>
  </Provider>,
    
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
