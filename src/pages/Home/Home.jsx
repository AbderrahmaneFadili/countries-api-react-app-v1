import React from "react";
import { Link } from "react-router-dom";
import FindCountry from "../../components/FindCountry";
import Countries from "../../components/Countries";
const Home = () => {
  return (
    <>
      <FindCountry />
      <Countries />
    </>
  );
};

export default Home;
