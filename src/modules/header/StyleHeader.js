import styled from "styled-components";

export const StyleHeader = styled.header`
  position: absolute;
  left: 0;
  right: 0;
  z-index: 5;
  height: min-content;
  max-width: 100vw;
  padding: calc(var(--index) * 0.878) calc(var(--index) * 2.634);
  color: ${(props) => props.headerColor};
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  align-items: end;
  @media screen and (max-width: 851px) {
    padding: calc(var(--index) * 0.74) calc(var(--index) * 0.44);
    text-align: center;
  }
  & a {
    color: ${(props) => props.headerColor};
  }
`;
export const AdaptiveIcons = styled.nav`
  display: none;
  @media screen and (max-width: 851px) {
    display: block;
    & svg {
      height: calc(var(--index) * 0.85);
      width: calc(var(--index) * 0.85);
    }

    & svg {
      margin-left: calc(var(--index) * 0.878);
    }
  }
`;
export const SignOutSection = styled.span`
  cursor: pointer;
`;
