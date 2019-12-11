
import './index.css';
import './sbadmin.css';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Components/Login';





ReactDOM.render(
    <BrowserRouter>
        <Switch>
          <Route path="/login"><Login/></Route>
          <Route path="/"><App/></Route>
        </Switch>
    </BrowserRouter>
    , document.body);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
