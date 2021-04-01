import React from "react";
import BackButton from "../../components/BackButton/BackButton";
import { Container } from "../../themes/GlobalStyles";
import CountryInfo from "../../components/CountryInfo/";
const Details = () => {
  return (
    <Container>
      <BackButton />
      <CountryInfo />
    </Container>
  );
};

export default Details;
