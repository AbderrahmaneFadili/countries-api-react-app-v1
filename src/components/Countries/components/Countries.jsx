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
        {countries &&
          countries.length > 0 &&
          countries.map((country, i) => (
            <CountryCard
              flags={country?.flags}
              key={i.toString()}
              name={country?.name}
              alpha2Code={country?.alpha2Code}
              population={country?.population}
              region={country?.region}
              capital={country?.capital}
              cca2={country?.cca2}
            />
          ))}
      </CountriesContainer>
    </Container>
  );
};

export default Countries;
