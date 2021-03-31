import styled from "styled-components";
import { GoChevronDown } from "react-icons/go";

//Drop Down Container
export const DropDownContainer = styled.div`
  width: 255px;
  padding: 1.4rem 2.4rem;
  background-color: ${({ theme }) => theme.elements};
  border-radius: 0.4rem;
  -webkit-box-shadow: 0px 1px 8px 3px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 1px 8px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
  position: relative;
  cursor: pointer;

  &:active {
    background-color: rgba(0, 0, 0, 0.1);
  }

  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`;

//Drop Down Title
export const DropDownTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
`;

//DropDown icon down
export const ArrowDown = styled(GoChevronDown)`
  font-size: 1.4rem;
  position: absolute;
  right: 0.9rem;
`;

//DropDown Menu
export const DropDownMenu = styled.div`
  padding-bottom: 1.5rem;
  padding-top: 0.7rem;
  width: 100%;
  background-color: ${({ theme }) => theme.elements};
  position: absolute;
  left: 0;
  top: 68px;
  -webkit-box-shadow: 0px 1px 8px 3px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 1px 8px 3px rgba(0, 0, 0, 0.1);
  border-radius: 0.4rem;
  visibility: ${({ toggleDropDown }) =>
    toggleDropDown ? "visible" : "hidden"};

  @media screen and (min-width: 768px) {
    top: 76px;
  }
`;

//DropDown Menu Item
export const DropDownItem = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  padding: 0.4rem 2rem;
  width: 100%;

  &:hover,
  &:active {
    background: rgba(0, 0, 0, 0.1);
  }
`;
