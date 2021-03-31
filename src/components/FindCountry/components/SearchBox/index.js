import React from "react";
import SearchBoxComponent from "./components/SearchBox";
import { connect } from "react-redux";
import {
  fetchByName,
  fetchCountries,
} from "../../../../redux/actions/Countries";

const SearchBox = (props) => <SearchBoxComponent {...props} />;
const mapDispatchToProps = (dispatch) => ({
  fetchByName: (name) => dispatch(fetchByName(name)),
  fetchCountries: () => dispatch(fetchCountries()),
});

export default connect(null, mapDispatchToProps)(SearchBox);
