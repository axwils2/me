import { hot } from 'react-hot-loader/root';
import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { AppContainer, PagesContainer } from './AppStyles';
import Nav from './components/Nav';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const App = () => {
  return (
    <HashRouter basename="/">
      <AppContainer>
        <Route
          path="/"
          component={() => <Nav />}
        />
        <PagesContainer>
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
        </PagesContainer>
      </AppContainer>
    </HashRouter>
  );
}

export default hot(App);
