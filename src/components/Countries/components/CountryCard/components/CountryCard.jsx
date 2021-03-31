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

const CountryCard = ({ name, alpha2Code, population, region, capital }) => {
  const formatedPopulation = numeral(population).format("0,0");

  return (
    <ContryCardConatiner to={`/details/${name}`}>
      <CountryImage
        src={`https://raw.githubusercontent.com/hampusborgos/country-flags/master/png1000px/${alpha2Code.toLowerCase()}.png`}
        alt="Flag"
      />
      <CountryContent>
        <CountryName>{name}</CountryName>
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
