import React from 'react';

import './App.css';
import logo from './assets/auction-hammer-logo.png';
import Routes from './routes';

function App() {
  return (
    <div className="container">
      <img width="100" src={logo} alt="AirCnc" />
      <div className="content">
        <Routes />
      </div>
    </div>
  );
}

export default App;
