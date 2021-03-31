import styled from "styled-components";
import { IoSearchSharp } from "react-icons/io5";

//Search Box Container
export const SearchBoxContainer = styled.div`
  width: 100%;
  padding: 1.4rem 3rem;
  background-color: ${({ theme }) => theme.elements};
  border-radius: 0.4rem;
  -webkit-box-shadow: 0px 1px 8px 3px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 1px 8px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 70%;
  }
`;

//Search Box Input
export const SearchBoxInput = styled.input`
  outline: 0;
  border: 0;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 1.2rem;
  background: transparent;
  color: ${({ theme }) => theme.inputText};
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.inputText};
  }
`;

//Search Icon
export const SearchIcon = styled(IoSearchSharp)`
  color: ${({ theme }) => theme.inputText};
  font-size: 2rem;
  margin-right: 1.4rem;
  position: relative;
  bottom: 2px;
`;
