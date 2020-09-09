import React from "react";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";

// //routing
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import About from "./pages/about";

function App() {
  return (
    <ThemeProvider theme={theme}>
        <GlobalStyles />


        this here is some idiotic bullshit
        
      {/* <Router>
        <Switch>
          <Route exact path={"/"}>
            <About />
          </Route>

          <Route exact path={"/portfolio"}>
            <div>portfolio's dead jim</div>
          </Route>
        </Switch>
      </Router> */}



    </ThemeProvider>
  );
}

export default App;
