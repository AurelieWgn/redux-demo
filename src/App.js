import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Home from './components/Home';
import Recap from "./components/Recap";
import Nav from "./components/Nav";

function App() {
  return (
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component= {Home}/>
          <Route exact path="/recap" component= {Recap}/>
        </Switch>
      </div>

  );
}

export default App;
