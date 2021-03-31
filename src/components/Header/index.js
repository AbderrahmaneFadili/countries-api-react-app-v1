import React from "react";
import { connect } from "react-redux";
import { toggleTheme } from "../../redux/actions/toggleActions";
import HeaderComponent from "./components/Header";

const Header = (props) => <HeaderComponent {...props} />;

const mapDispatchToProps = (dispatch) => ({
  toggleThemeAction: () => dispatch(toggleTheme()),
});
const mapStateToProps = ({ toggleThemeReducer }) => ({
  theme: toggleThemeReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
