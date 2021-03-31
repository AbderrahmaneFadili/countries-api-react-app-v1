import React from "react";
import { connect } from "react-redux";
import AppComponent from "./components/App";

const App = (props) => <AppComponent {...props} />;

const mapStateToProps = ({ toggleThemeReducer }) => ({
  theme: toggleThemeReducer,
});

export default connect(mapStateToProps, null)(App);
