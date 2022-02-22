import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import AboutSection from './components/AboutSection';
// import HeroSection from './components/HeroSection';
import NavMenu from './components/NavMenu';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <ScrollToTop />
        <Switch>
          <Route path="/about">
            <About />
            <Footer />
          </Route>
          <Route path="/projects">
            <Projects />
            <Footer />
          </Route>
          <Route path="/contact">
            <Contact />
            <Footer />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        {/* <HeroSection />
        <AboutSection /> */}
      </Router>
    </>
  );
}
