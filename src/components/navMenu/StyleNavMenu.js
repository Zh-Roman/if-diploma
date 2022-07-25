import styled from "styled-components";

export const StyleNavMenu = styled.nav`
  @media screen and (max-width: 851px) {
    display: none;
  }
  width: 20vw;
  display: flex;
  justify-content: space-between;
  align-items: end;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-size: calc(var(--index) * 0.527);
  line-height: calc(var(--index) * 0.527);
  margin-bottom: calc(var(--index) * 0.22);

  & :not(:last-child) {
    margin-right: calc(var(--index) * 1.756);
  }

  & span:first-child {
    margin-right: calc(var(--index) * 0.22);
  }

  & div {
    cursor: pointer;
  }
`;
export const AdaptiveNavMenu = styled.nav`
  display: flex;
  font-size: calc(var(--index) * 0.7);
  line-height: calc(var(--index) * 0.7);
  background-color: var(--gray);
  position: absolute;
  left: 0;
  top: calc(var(--index) * 0.75);
  height: calc(var(--index) * 1.756);
  width: 100%;
  z-index: 10;
  align-items: center;
  justify-content: space-around;
`;
