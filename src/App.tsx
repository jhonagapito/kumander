import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Components/Header';
import Budget from './Components/Budget';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main role="main" className="container">

          <Budget />

        
      </main>
      
    </div>
  );
}

export default App;
