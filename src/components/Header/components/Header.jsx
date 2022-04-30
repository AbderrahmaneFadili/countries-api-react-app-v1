import React from "react";
import { Container } from "../../../themes/GlobalStyles";
import {
  MainHeader,
  HeaderTitle,
  HeaderContainer,
  ToggleTitle,
} from "./Header.styles";
import { IoMoonOutline, IoMoonSharp } from "react-icons/io5";
import { useHistory } from "react-router-dom";

const Header = ({ theme, toggleThemeAction }) => {
  const handleToggleTheme = () => {
    //Storing the new Theme in LocalStorage
    localStorage.setItem("currentTheme", theme === "light" ? "dark" : "light");
    toggleThemeAction();
  };

  const history = useHistory();

  const redirectToHome = (event) => {
    history.push("/");
  };
  return (
    <MainHeader>
      <Container>
        <HeaderContainer>
          <HeaderTitle onClick={redirectToHome}>
            Where in the world?
          </HeaderTitle>

          <ToggleTitle onClick={handleToggleTheme}>
            {localStorage.getItem("currentTheme") === "light" ||
            localStorage.getItem("currentTheme") === null ? (
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
