import React from "react";
import CountryInfoComponent from "./components/CountryInfo";
import { connect } from "react-redux";
import { fetchCountryByName } from "../../redux/actions/Countries";

const CountryInfo = (props) => <CountryInfoComponent {...props} />;

const mapDispatchToProps = (dispatch) => () => {
  return {
    fetchCountryByName: (name) => dispatch(fetchCountryByName(name)),
  };
};

const mapStateToProps = ({ countriesReducer }) => ({
  error: countriesReducer.error,
  loading: countriesReducer.loading,
  country: countriesReducer.country,
});

export default connect(mapStateToProps, mapDispatchToProps)(CountryInfo);
