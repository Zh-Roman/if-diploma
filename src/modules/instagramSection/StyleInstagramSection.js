import styled from "styled-components";

export const StyleInstagramSection = styled.section`
  padding-top: 0;
  padding-bottom: 0;
  text-transform: uppercase;
  font-size: calc(var(--index) * 0.7);
  line-height: calc(var(--index) * 1.05);
  @media screen and (max-width: 851px) {
    font-size: calc(var(--index) * 0.527);
    line-height: calc(var(--index) * 0.79);
  }
`;
export const InstagramSectionTitle = styled.div`
  & span {
    margin-left: calc(var(--index) * 2.634);
  }

  & svg {
    margin-left: calc(var(--index) * 0.527);
  }
`;
export const InstagramSectionGrid = styled.div`
  @media screen and (min-width: 851px) {
    margin: calc(var(--index) * 1.317) 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);

    & div:first-child {
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 3;
    }
  }
  @media screen and (max-width: 851px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
    margin: calc(var(--index) * 0.88) calc(var(--index) * -0.88)
      calc(var(--index) * 1.537);
  }
`;
export const InstagramSectionItem = styled.div`
  min-width: calc(var(--index) * 13.74);
  min-height: calc(var(--index) * 13.74);
  background: url(${(props) => props.bcgImg}) center no-repeat;
  background-size: cover;
  @media screen and (max-width: 851px) {
    width: calc(var(--index) * 18.3);
    height: calc(var(--index) * 18.3);
  }
`;
export const LogoHashtagDiv = styled.div``;
