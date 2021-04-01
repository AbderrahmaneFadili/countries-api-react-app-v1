import styled from "styled-components";

//Country Info Container
export const CountryInfoContainer = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 6rem 0 3rem;
`;

//Counrty Info Col
export const CountryInfoCol = styled.div`
  width: 45%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

//Coounry image
export const CountryImage = styled.img`
  width: 100%;
  height: 100%;
`;

//Country Content
export const CountryContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem 0;
`;

//Country Name
export const CounryName = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 2rem;
`;

//Country Content Container
export const CountryContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

//Country Content
export const CountryContentCol = styled.div`
  width: 45%;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 2rem;
  }
`;

//Country Content Info
export const CountryContentInfo = styled.p`
  margin-bottom: 1rem;
`;

//Label
export const Label = styled.span`
  font-weight: 600;
  font-size: 1rem;
`;

//Info
export const Info = styled.span`
  font-size: 1rem;
`;

//Borders
export const Borders = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 4rem;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const BorderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Border = styled.div`
  padding: 0.8rem 2.4rem;
  background-color: ${({ theme }) => theme.elements};
  border-radius: 0.3rem;
  -webkit-box-shadow: 0px 1px 8px 3px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 1px 8px 3px rgba(0, 0, 0, 0.1);
  margin: 10px 0 10px 10px;
  white-space: nowrap;
`;
