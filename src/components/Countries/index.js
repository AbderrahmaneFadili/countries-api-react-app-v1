import React from "react";
import { connect } from "react-redux";
import CountriesComponent from "./components/Countries";
import { fetchCountries } from "../../redux/actions/Countries";

const Countries = (props) => <CountriesComponent {...props} />;

const mapStateToProps = ({ countriesReducer }) => ({
  loading: countriesReducer.loading,
  countries: countriesReducer.countries,
  error: countriesReducer.error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCountries: () => dispatch(fetchCountries()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Countries);
