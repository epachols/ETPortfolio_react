import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Contact from './pages/contact'
import Home from './pages/home'
import Portfolio from './pages/portfolio'

function App() {
  return (
  <Router>

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        
      </div>



  <Switch>
    <Route exact path={"/"}>
    <hr></hr>        
    <Home />
    </Route>
    <Route exact path={"/contact"}>
      <hr></hr> 
      <Contact />
    </Route>
    <Route exact path={"/portfolio"}>
      <hr></hr>
      <Portfolio />
    </Route>
</Switch>

</Router>

     
     
  );
}

export default App;



