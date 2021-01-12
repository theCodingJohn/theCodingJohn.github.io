import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home/Home';
import Nav from './components/Nav/Nav';

import { SpotifyProvider } from "./contexts/SpotifyContext";

const App = () => {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <SpotifyProvider>
            <Route exact path="/" component={Home}></Route>
          </SpotifyProvider>
        </Switch>
      </Router>
    </>
  )
}

export default App;
