import React, { useState } from "react";
import {
  DropDownContainer,
  DropDownTitle,
  ArrowDown,
  DropDownMenu,
  DropDownItem,
} from "./DropDown.styles";
const DropDown = () => {
  const [toggleDropDown, setToggleDropDown] = useState(false);
  const [dropDownTitle, setDropDownTitle] = useState("");

  const hamdleToggleDropDown = () => {
    setToggleDropDown(!toggleDropDown);
  };
  return (
    <DropDownContainer onClick={hamdleToggleDropDown}>
      <DropDownTitle>{dropDownTitle || "Filter By Region"}</DropDownTitle>
      <ArrowDown />
      <DropDownMenu toggleDropDown={toggleDropDown}>
        <DropDownItem onClick={() => setDropDownTitle("Africa")}>
          Africa
        </DropDownItem>
        <DropDownItem onClick={() => setDropDownTitle("America")}>
          America
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
