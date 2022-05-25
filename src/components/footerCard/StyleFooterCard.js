import styled from "styled-components";

export const StyleFooterCard = styled.div`
  color: var(--main-black);
  white-space: pre-line;
  font-weight: 400;
  font-size: calc(var(--index) * 0.527);
  line-height: calc(var(--index) * 0.527);

  & svg {
    width: calc(var(--index) * 0.6);
    height: calc(var(--index) * 0.6);
  }

  & span {
    margin-right: calc(var(--index) * 0.44);
  }

  & li {
    text-transform: uppercase;
  }

  & li:not(:last-child) {
    margin-bottom: calc(var(--index) * 0.878);
  }

  & p:not(:last-child) {
    margin-bottom: calc(var(--index) * 0.3);
  }
`;
export const FooterCardTitle = styled.h4`
  text-transform: uppercase;
  font-weight: 400;
  font-size: calc(var(--index) * 0.7);
  line-height: calc(var(--index) * 1.05);
  margin-bottom: calc(var(--index) * 1.317);
`;
