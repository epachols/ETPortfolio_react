import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Contact from './pages/contact';
import Home from './pages/home';
import Portfolio from './pages/portfolio';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';


function App() {
  return (
  <Router>


  <Switch>
    <Route exact path={"/"}>
    <Header />
    <hr></hr>  
    <Home />
    <Footer />
    </Route>

    <Route exact path={"/contact"}>
      <Header />
      <hr></hr> 
      <Contact /> 
      <Footer />
    </Route>

    <Route exact path={"/portfolio"}>
      <Header />
      <hr></hr>
      <Portfolio />
      <Footer />
    </Route>

</Switch>

</Router>
 
     
  );
}

export default App;



