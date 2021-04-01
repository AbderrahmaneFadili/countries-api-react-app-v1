import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";

export const Button = styled.a`
  padding: 1rem 2.4rem;
  background-color: ${({ theme }) => theme.elements};
  border-radius: 0.4rem;
  -webkit-box-shadow: 0px 1px 8px 3px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 1px 8px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  border: 0;
  outline: 0;
  margin: 3rem 0;
  width: 130px;
  font-size: 1.2rem;
  text-decoration: none;
  color: inherit;
  cursor: pointer;

  &:active {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const LeftArrow = styled(BsArrowLeft)`
  position: relative;
  right: 9px;
`;
