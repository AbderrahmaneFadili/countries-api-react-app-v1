import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Details from "../../../pages/Details/Details";
import Home from "../../../pages/Home/Home";
import { ThemeProvider } from "styled-components";
import { light, dark } from "../../../themes/themes";
import GlobalStyle from "../../../themes/GlobalStyles";
import Header from "../../Header";

const App = ({ theme }) => {
  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <Router>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path="/details/:id" component={Details} />
          <Route exact path="/" component={Home} />
          <Route component={() => <h1>page not found (404)</h1>} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
