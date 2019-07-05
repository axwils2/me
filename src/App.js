import { hot } from 'react-hot-loader/root';
import React from 'react';
import logo from './assets/logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Oh hey sabrina and marie</p>
      </header>
    </div>
  );
}

export default hot(App);
