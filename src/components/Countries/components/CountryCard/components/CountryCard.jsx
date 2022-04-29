import React from "react";
import {
  ContryCardConatiner,
  CountryImage,
  CountryName,
  CountryContent,
  CountryInfo,
  CountryInfoLabel,
  CountryInfoValue,
} from "./CountryCard.styles";

import numeral from "numeral";

const CountryCard = ({
  name,
  alpha2Code,
  population,
  region,
  capital,
  cca2,
  flags,
}) => {
  const formatedPopulation = numeral(population).format("0,0");

  return (
    <ContryCardConatiner
      to={`/details/${typeof name === "string" ? name : name.common}`}
    >
      {alpha2Code && <CountryImage src={flags.svg} alt="Flag" />}
      {cca2 && <CountryImage src={flags.svg} alt="Flag" />}

      <CountryContent>
        {typeof name === "string" ? (
          <CountryName>{name}</CountryName>
        ) : (
          <CountryName>{name.common}</CountryName>
        )}

        <CountryInfo>
          <CountryInfoLabel>Population: </CountryInfoLabel>
          <CountryInfoValue>{formatedPopulation}</CountryInfoValue>
        </CountryInfo>

        <CountryInfo>
          <CountryInfoLabel>Region: </CountryInfoLabel>
          <CountryInfoValue>{region}</CountryInfoValue>
        </CountryInfo>

        <CountryInfo>
          <CountryInfoLabel>Capital: </CountryInfoLabel>
          <CountryInfoValue>{capital}</CountryInfoValue>
        </CountryInfo>
      </CountryContent>
    </ContryCardConatiner>
  );
};

export default CountryCard;
