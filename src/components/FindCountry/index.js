import React from "react";
import FindCountryComponent from "./components/FindCountry";
import { fetchByName } from "../../redux/actions/Countries";

const FindCountry = (props) => <FindCountryComponent {...props} />;

export default FindCountry;
