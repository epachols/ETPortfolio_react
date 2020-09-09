import React from "react";
//styling
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";
// //routing
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/about";



import Navi from "./components/Navi/Navi.component";

function App() {
  return (
    <ThemeProvider theme={theme}>
        <GlobalStyles />



      <Router>
        <Navi />
        <Switch>

        <Route exact path ={"/"}>
        Lamont, ya big dummy!
        </Route>

          <Route exact path={"/about"}>
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
