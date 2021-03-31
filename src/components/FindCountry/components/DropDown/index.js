import React from "react";
import { connect } from "react-redux";
import DropDownComponent from "./components/DropDown";
import { fetchCountriesByRegion } from "../../../../redux/actions/Countries";

const DropDown = (props) => <DropDownComponent {...props} />;

const mapDispatchToProps = (dispatch) => ({
  fetchCountriesByRegion: (region) => dispatch(fetchCountriesByRegion(region)),
});

export default connect(null, mapDispatchToProps)(DropDown);
