import React, { useEffect } from "react";
import { Container } from "../../../themes/GlobalStyles";
import { CountriesContainer, Loading } from "./Countries.styles";
import CountryCard from "./CountryCard";
import ClipLoader from "react-spinners/ClipLoader";

const Countries = ({ fetchCountries, loading, countries }) => {
  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <Container>
      <CountriesContainer>
        {loading && (
          <Loading>
            <ClipLoader size={70} />
          </Loading>
        )}
        {countries.length > 0 &&
          countries.map((country, i) => (
            <CountryCard
              to={`/details/${country.name}`}
              key={i.toString()}
              {...country}
            />
          ))}
      </CountriesContainer>
    </Container>
  );
};

export default Countries;
