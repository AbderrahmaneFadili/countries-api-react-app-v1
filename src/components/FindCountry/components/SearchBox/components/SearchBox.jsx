import React from "react";
import {
  SearchBoxContainer,
  SearchBoxInput,
  SearchIcon,
} from "./SearchBox.styles";

const SearchBox = () => {
  return (
    <SearchBoxContainer>
      <SearchIcon />
      <SearchBoxInput type="text" placeholder="Search for a country..." />
    </SearchBoxContainer>
  );
};

export default SearchBox;
