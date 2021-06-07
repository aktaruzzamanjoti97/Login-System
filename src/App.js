import React from "react";
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from "./components/Login/Login";
import WelcomePage from "./components/WelcomePage/WelcomePage";

function App() {
  return (
    <Router>
      <div>   
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/welcomePage">
            <WelcomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
