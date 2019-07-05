import { hot } from 'react-hot-loader/root';
import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Nav from './components/Nav';
import About from './pages/About';

const App = () => {
  return (
    
      <HashRouter basename="/">
        <div className="App">
          <Nav />
          <Switch>
            <Route
              path="/about"
              component={() => <About />}
            />
          </Switch>
        </div>
      </HashRouter>
  );
}

export default hot(App);
