import React from "react";
import { connect } from "react-redux";
import CountryCardComponent from "./components/CountryCard";

const CountryCard = (props) => <CountryCardComponent {...props} />;

export default connect()(CountryCard);
