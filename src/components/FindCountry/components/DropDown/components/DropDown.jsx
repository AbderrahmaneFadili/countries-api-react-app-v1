import React, { useEffect, useState } from "react";
import {
  DropDownContainer,
  DropDownTitle,
  ArrowDown,
  DropDownMenu,
  DropDownItem,
} from "./DropDown.styles";
const DropDown = ({ fetchCountriesByRegion }) => {
  const [toggleDropDown, setToggleDropDown] = useState(false);
  const [dropDownTitle, setDropDownTitle] = useState("");

  const hamdleToggleDropDown = () => {
    setToggleDropDown(!toggleDropDown);
  };

  useEffect(() => {
    if (dropDownTitle) {
      console.log(dropDownTitle);
      fetchCountriesByRegion(dropDownTitle.toLocaleLowerCase());
    }
  }, [dropDownTitle]);
  return (
    <DropDownContainer onClick={hamdleToggleDropDown}>
      <DropDownTitle>{dropDownTitle || "Filter By Region"}</DropDownTitle>
      <ArrowDown />
      <DropDownMenu toggleDropDown={toggleDropDown}>
        <DropDownItem onClick={() => setDropDownTitle("africa")}>
          Africa
        </DropDownItem>
        <DropDownItem onClick={() => setDropDownTitle("americas")}>
          Americas
        </DropDownItem>
        <DropDownItem onClick={() => setDropDownTitle("asia")}>
          Asia
        </DropDownItem>
        <DropDownItem onClick={() => setDropDownTitle("europe")}>
          Europe
        </DropDownItem>
        <DropDownItem onClick={() => setDropDownTitle("oceania")}>
          Oceania
        </DropDownItem>
      </DropDownMenu>
    </DropDownContainer>
  );
};

export default DropDown;
