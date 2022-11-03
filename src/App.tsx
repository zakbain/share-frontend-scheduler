import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SpacePanel } from './SpacePanel';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Frontend web client for customers to search, view, and reserve spaces.
        </p>
        <ul>
          <li><SpacePanel title='Home' description='My house'></SpacePanel></li>
        </ul>
      </header>
    </div>
  );
}

export default App;
