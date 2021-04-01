import React, { useEffect } from "react";
import { Container, Loading } from "../../../themes/GlobalStyles";
import { CountriesContainer } from "./Countries.styles";
import CountryCard from "./CountryCard";
import ClipLoader from "react-spinners/ClipLoader";
import { useTheme } from "styled-components";

const Countries = ({ fetchCountries, loading, countries }) => {
  const theme = useTheme();

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <Container>
      <CountriesContainer>
        {loading && (
          <Loading>
            <ClipLoader size={70} color={theme.text} />
          </Loading>
        )}
        {countries.length > 0 &&
          countries.map((country, i) => (
            <CountryCard key={i.toString()} {...country} />
          ))}
      </CountriesContainer>
    </Container>
  );
};

export default Countries;
