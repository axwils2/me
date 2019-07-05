import { hot } from 'react-hot-loader/root';
import React from 'react';
import './App.css';

import Nav from './Nav';

const App = () => {
  return (
    <div className="App">
      <Nav />
    </div>
  );
}

export default hot(App);
