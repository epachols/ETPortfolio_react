import React from "react";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./pages/about";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyles />
        <Switch>
          <Route exact path={"/"}>
            <About />
          </Route>

          <Route exact path={"/portfolio"}>
            <div>portfolio's dead jim</div>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
