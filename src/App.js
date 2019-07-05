import { hot } from 'react-hot-loader/root';
import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { AppContainer } from './AppStyles';
import Nav from './components/Nav';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const App = () => {
  return (
    <HashRouter basename="/">
      <AppContainer>
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
      </AppContainer>
    </HashRouter>
  );
}

export default hot(App);
