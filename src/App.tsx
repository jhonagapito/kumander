import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Components/Header';
import Budget from './Components/Budget';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Components/Login';

const App: React.FC = () => {
  useEffect(() => {
    document.body.classList.remove('login-body');
  },[]);
  return (
    <div className="App">
      <Header />
      <main role="main" className="container">
        <Budget/>
      </main>
    </div>
  );
}

export default App;
