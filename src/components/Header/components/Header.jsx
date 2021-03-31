import React from "react";
import { Container } from "../../../themes/GlobalStyles";
import {
  MainHeader,
  HeaderTitle,
  HeaderContainer,
  ToggleTitle,
} from "./Header.styles";
import { IoMoonOutline, IoMoonSharp } from "react-icons/io5";

const Header = ({ theme, toggleThemeAction }) => {
  const handleToggleTheme = () => {
    toggleThemeAction();
  };
  return (
    <MainHeader>
      <Container>
        <HeaderContainer>
          <HeaderTitle>Where in the world?</HeaderTitle>

          <ToggleTitle onClick={handleToggleTheme}>
            {theme === "light" ? (
              <IoMoonOutline
                size={22}
                style={{ top: 4, right: 6, position: "relative" }}
              />
            ) : (
              <IoMoonSharp
                size={22}
                style={{ top: 4, right: 6, position: "relative" }}
              />
            )}{" "}
            Dark Mode
          </ToggleTitle>
        </HeaderContainer>
      </Container>
    </MainHeader>
  );
};

export default Header;
