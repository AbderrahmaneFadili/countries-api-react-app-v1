import React from "react";
import {
  SearchBoxContainer,
  SearchBoxInput,
  SearchIcon,
} from "./SearchBox.styles";

const SearchBox = ({ fetchByName, fetchCountries }) => {
  const handleInputValue = (event) => {
    if (event.target.value !== "") {
      fetchByName(event.target.value);
    } else {
      fetchCountries();
    }
  };

  return (
    <SearchBoxContainer>
      <SearchIcon />
      <SearchBoxInput
        onChange={handleInputValue}
        type="text"
        placeholder="Search for a country..."
      />
    </SearchBoxContainer>
  );
};

export default SearchBox;
