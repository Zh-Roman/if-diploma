import styled from "styled-components";

export const SearchSectionStyle = styled.section`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
  height: 100%;
  width: 100%;
  background-color: var(--light-gray);
  padding: calc(var(--index) * 7.95) calc(var(--index) * 2.634) 0
    calc(var(--index) * 9.33);
  display: flex;
  justify-content: end;

  & span {
    height: calc(var(--index) * 2.93);
    width: calc(var(--index) * 2.93);
    cursor: pointer;

    & svg {
      color: var(--main-white);
      height: 100%;
      width: 100%;
    }
  }

  @media screen and (max-width: 851px) {
    padding: calc(var(--index) * 8.65) calc(var(--index) * 1.317);
    & span {
      height: calc(var(--index) * 1.756);
      width: calc(var(--index) * 1.756);
    }
  }
`;
export const SearchSectionForm = styled.form`
  display: block;
  padding-bottom: calc(var(--index) * 0.878);
  margin-left: calc(var(--index) * 3.78);
  height: fit-content;
  width: min-content;
  border-bottom: calc(var(--index) * 0.13) solid var(--main-white);

  & input {
    font-size: calc(var(--index) * 1.4);
    line-height: calc(var(--index) * 1.4);
    width: min(calc(var(--index) * 45.55), 75vw);
    text-transform: uppercase;
    background-color: var(--light-gray);
    color: var(--main-white);
    border: none;
  }

  & input::placeholder {
    color: var(--main-white);
  }

  @media screen and (max-width: 851px) {
    margin-left: calc(var(--index) * 0.878);
    padding-bottom: calc(var(--index) * 0.527);

    & input {
      font-size: calc(var(--index) * 1.1);
      line-height: calc(var(--index) * 1.4);
      text-transform: uppercase;
      background-color: var(--light-gray);
      color: var(--main-white);
      border: none;
    }
  }
`;
