import React from "react";
import {
  FindCountryWrapper,
  FindCountryContainer,
  FindCountryCol,
} from "./FindCountry.styles";

import { Container } from "../../../themes/GlobalStyles";
import SearchBox from "./SearchBox/";
import DropDown from "./DropDown/";

const FindCountry = () => {
  return (
    <FindCountryWrapper>
      <Container>
        <FindCountryContainer>
          <FindCountryCol>
            <SearchBox />
          </FindCountryCol>
          <FindCountryCol>
            <DropDown />
          </FindCountryCol>
        </FindCountryContainer>
      </Container>
    </FindCountryWrapper>
  );
};

export default FindCountry;
