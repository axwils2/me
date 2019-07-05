import { hot } from 'react-hot-loader/root';
import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Nav from './components/Nav';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

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
            <Route
              path="/projects"
              component={() => <Projects />}
            />
            <Route
              path="/contact"
              component={() => <Contact />}
            />
          </Switch>
        </div>
      </HashRouter>
  );
}

export default hot(App);
