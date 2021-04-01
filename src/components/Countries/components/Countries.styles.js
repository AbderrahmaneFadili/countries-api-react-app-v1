import styled from "styled-components";

//Countries Container
export const CountriesContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media screen and (min-width: 662px) {
    align-items: flex-start;
  }
`;
