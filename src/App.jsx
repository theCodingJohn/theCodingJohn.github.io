import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// components
import Nav from './components/Nav/Nav';

// pages
import Home from './pages/Home/Home';
import About from './pages/About/About'
import Projects from './pages/Projects/Projects'

import { SpotifyProvider } from "./contexts/SpotifyContext";

const App = () => {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <SpotifyProvider>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/projects" component={Projects}></Route>
          </SpotifyProvider>
        </Switch>
      </Router>
    </>
  )
}

export default App;
