import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

import Contact from './pages/contact';
import Home from './pages/home';
import Portfolio from './pages/portfolio';
import Navbar from './components/navbar/navbar.component';

function App() {
  return (
  <Router>


  <Switch>
    <Route exact path={"/"}>
    <Navbar />
    <hr></hr>  
    <Home />
    </Route>

    <Route exact path={"/contact"}>
      <Navbar />
      <hr></hr> 
      <Contact />
    </Route>

    <Route exact path={"/portfolio"}>
      <Navbar />
      <hr></hr>
      <Portfolio />
    </Route>

</Switch>

</Router>
 
     
  );
}

export default App;



