import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';


function App() {
  return (
  <Router>


  <Switch>
    <Route exact path={"/"}>
    <div>he's dead jim</div>
    </Route>

    <Route exact path={"/portfolio"}>
   <div>portfolio's dead jim</div>
    </Route>

    <Route exact path={"/contact"}>
   <div>contact's dead jim</div>
    </Route>

</Switch>

</Router>
 
     
  );
}

export default App;



