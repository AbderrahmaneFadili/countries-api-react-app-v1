import React from "react";
import { connect } from "react-redux";
import DropDownComponent from "./components/DropDown";

const DropDown = (props) => <DropDownComponent {...props} />;

export default connect()(DropDown);
