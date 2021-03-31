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
        <DropDownItem onClick={() => setDropDownTitle("Africa")}>
          Africa
        </DropDownItem>
        <DropDownItem onClick={() => setDropDownTitle("Americas")}>
          Americas
        </DropDownItem>
        <DropDownItem onClick={() => setDropDownTitle("Asia")}>
          Asia
        </DropDownItem>
        <DropDownItem onClick={() => setDropDownTitle("Europe")}>
          Europe
        </DropDownItem>
        <DropDownItem onClick={() => setDropDownTitle("Oceania")}>
          Oceania
        </DropDownItem>
      </DropDownMenu>
    </DropDownContainer>
  );
};

export default DropDown;
