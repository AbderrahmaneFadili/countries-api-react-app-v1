import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Details from "../../../pages/Details/Details";
import Home from "../../../pages/Home/Home";
import { ThemeProvider } from "styled-components";
import { light, dark } from "../../../themes/themes";
import GlobalStyle from "../../../themes/GlobalStyles";
import Header from "../../Header";

const App = ({ theme }) => {
  const [currentTheme, setCurrentTheme] = useState(theme);
  useEffect(() => {
    //check if the current theme in the localStorage
    if (localStorage.getItem("currentTheme") !== null) {
      setCurrentTheme(localStorage.getItem("currentTheme"));
    }
  }, [theme]);
  return (
    <Router>
      <ThemeProvider theme={currentTheme === "light" ? light : dark}>
        <>
          <GlobalStyle />
          <Header />
          <Switch>
            <Route exact path="/details/:name">
              <Details />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route component={() => <h1>Page not found (404)</h1>} />
          </Switch>
        </>
      </ThemeProvider>
    </Router>
  );
};

export default App;
