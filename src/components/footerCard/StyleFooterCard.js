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
    cursor: pointer;
  }

  & li:not(:last-child) {
    margin-bottom: calc(var(--index) * 0.878);
  }

  & p:not(:last-child) {
    margin-bottom: calc(var(--index) * 0.3);
  }

  @media screen and (max-width: 851px) {
    margin: 0 calc(var(--index) * -1.1);
    width: 100%;
    & li,
    p {
      display: ${(props) => (props.footerCardDetails ? "block" : "none")};
      padding-left: calc(var(--index) * 1.1);
    }
    & li,
    p:last-child {
      margin-bottom: calc(var(--index) * 0.878);
    }
  }
`;
export const FooterCardTitle = styled.h4`
  text-transform: uppercase;
  font-weight: 400;
  font-size: calc(var(--index) * 0.7);
  line-height: calc(var(--index) * 1.05);
  margin-bottom: calc(var(--index) * 1.317);
  & svg {
    display: none;
  }
  @media screen and (max-width: 851px) {
    border-top: calc(var(--index) * 0.044) dashed var(--light-gray);
    font-size: calc(var(--index) * 0.527);
    line-height: calc(var(--index) * 0.79);
    margin-bottom: calc(var(--index));
    padding-left: calc(var(--index) * 1.1);
    padding-top: calc(var(--index));
    & svg {
      display: inline-block;
      margin-right: calc(var(--index) * 0.44);
    }
  }
`;
