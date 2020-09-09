import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./pages/about";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"}>
          <About />
        </Route>

        <Route exact path={"/portfolio"}>
          <div>portfolio's dead jim</div>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
