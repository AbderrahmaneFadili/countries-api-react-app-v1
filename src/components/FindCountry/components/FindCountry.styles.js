import styled from "styled-components";

//Find Country Wrapper
export const FindCountryWrapper = styled.section`
  padding: 2rem 0 1rem;

  @media screen and (min-width: 768px) {
    padding: 3rem 0 2rem;
  }
`;

//Find Country Container
export const FindCountryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

//Find Country Col
export const FindCountryCol = styled.div`
  width: 100%;
  margin-bottom: 2rem;

  @media screen and (min-width: 768px) {
    width: 50%;

    &:last-child {
      display: flex;
      justify-content: flex-end;
    }
  }
`;
