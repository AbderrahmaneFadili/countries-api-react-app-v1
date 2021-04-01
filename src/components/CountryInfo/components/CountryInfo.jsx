import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { Loading } from "../../../themes/GlobalStyles";
import { useTheme } from "styled-components";
import numeral from "numeral";

import {
  CountryInfoContainer,
  CountryInfoCol,
  CountryImage,
  CountryContent,
  CounryName,
  CountryContentContainer,
  CountryContentCol,
  Label,
  Info,
  CountryContentInfo,
  Borders,
  Border,
  BorderContainer,
} from "./CountryInfo.styles";

import { countriesNames } from "../CountriesNames/countriesNames";

const CountryInfo = ({ fetchCountryByName, country, loading }) => {
  //getting the name from the params
  const { name } = useParams();

  //using the current theme object style
  const theme = useTheme();

  //first effect
  useEffect(() => {
    fetchCountryByName(name);
  }, []);

  const getBorders = () => {
    const borderNames = [];
    countriesNames.forEach((c) => {
      country.borders.forEach((b) => {
        if (c["alpha-3"] === b) {
          borderNames.push(c["name"]);
        }
      });
    });
    return borderNames;
  };

  return (
    <>
      {loading && (
        <Loading>
          <ClipLoader size={70} color={theme.text} />
        </Loading>
      )}
      {country && (
        <CountryInfoContainer>
          {/* Country info Col left */}
          <CountryInfoCol>
            <CountryImage src={country.flag} alt="Flag" />
          </CountryInfoCol>

          {/* Country info Col right */}
          <CountryInfoCol>
            {/* Country Content */}
            <CountryContent>
              <CounryName>{country.name}</CounryName>

              {/* Country Content Container */}
              <CountryContentContainer>
                <CountryContentCol>
                  <CountryContentInfo>
                    <Label>Native Name:</Label>{" "}
                    <Info>{country.nativeName}</Info>
                  </CountryContentInfo>

                  <CountryContentInfo>
                    <Label>Population:</Label>{" "}
                    <Info>{numeral(country.population).format("0,0")}</Info>
                  </CountryContentInfo>

                  <CountryContentInfo>
                    <Label>Region:</Label> <Info>{country.region}</Info>
                  </CountryContentInfo>

                  <CountryContentInfo>
                    <Label>Sub Region:</Label> <Info>{country.subregion}</Info>
                  </CountryContentInfo>

                  <CountryContentInfo>
                    <Label>Capital:</Label> <Info>{country.capital}</Info>
                  </CountryContentInfo>
                </CountryContentCol>

                <CountryContentCol>
                  <CountryContentInfo>
                    <Label>Top Level Domain:</Label>{" "}
                    <Info>{country.topLevelDomain}</Info>
                  </CountryContentInfo>

                  <CountryContentInfo>
                    <Label>Currencies:</Label>{" "}
                    <Info>
                      {country.currencies.map((c) => c.name).join(" ,")}
                    </Info>
                  </CountryContentInfo>

                  <CountryContentInfo>
                    <Label>Languages:</Label>{" "}
                    <Info>
                      {country.languages.map((l) => l.name).join(" ,")}
                    </Info>
                  </CountryContentInfo>
                </CountryContentCol>
              </CountryContentContainer>
              {/* Country Borders Container */}
              <Borders>
                <Label>Border Countries:</Label>
                <BorderContainer>
                  {getBorders().map((b, i) => (
                    <Border key={i.toString()}>{b}</Border>
                  ))}
                </BorderContainer>
              </Borders>
            </CountryContent>
          </CountryInfoCol>
        </CountryInfoContainer>
      )}
    </>
  );
};

export default CountryInfo;
