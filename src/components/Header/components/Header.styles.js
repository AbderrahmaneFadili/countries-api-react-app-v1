import styled from "styled-components";

//Main Header
export const MainHeader = styled.header`
  background-color: ${({ theme }) => theme.elements};
  padding: 3rem 0;
  -webkit-box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.1);

  @media screen and (min-width: 768px) {
    padding: 1.8rem 0;
  }
`;

//Header Container
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

//Header Title
export const HeaderTitle = styled.h1`
  font-size: 1.5rem;
`;

//ToggleTitle
export const ToggleTitle = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
`;
