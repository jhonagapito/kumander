
import './index.css';
import './sbadmin.css';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Login from './Components/Login';
import AuthRoute from './Components/AuthRoute';





ReactDOM.render(
    <HashRouter basename="/">
        <Switch>
          <Route path="/login"><Login/></Route>]
          <AuthRoute path="/" Component={App} />
        </Switch>
    </HashRouter>
    , document.body);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
