import styled from "styled-components";

//Country Card Container
export const ContryCardConatiner = styled.div`
  width: 80%;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.elements};
  -webkit-box-shadow: 0px 1px 8px 3px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 1px 8px 3px rgba(0, 0, 0, 0.1);
  border-radius: 0.4rem;
  margin-bottom: 4rem;

  /* Media for Tablette */
  @media screen and (min-width: 662px) {
    width: 45%;
    margin: 0 0 4rem 0;
  }

  /* Media for Tablette */
  @media screen and (min-width: 1240px) {
    width: 21%;
  }
`;

//Country image
export const CountryImage = styled.img`
  width: 100%;
  max-width: 100%;
  border-radius: 0.4rem 0.4rem 0 0;
  height: 50%;
  max-height: 50%;
`;

//Country Content
export const CountryContent = styled.div`
  padding: 2rem;

  @media screen and (max-width: 300px) {
    padding: 0.7rem;
  }
`;

//Country Name
export const CountryName = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 1.1rem;
`;

//Country Info
export const CountryInfo = styled.div`
  display: flex;
  align-items: baseline;
`;

//Country Info Label
export const CountryInfoLabel = styled.span`
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

//Country Info Value
export const CountryInfoValue = styled.span`
  margin-left: 0.4rem;
  font-size: 1.1rem;
`;
