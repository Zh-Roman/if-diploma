import styled from "styled-components";

export const SortedProductsSectionStyle = styled.section`
  color: var(--main-black);

  & button {
    color: var(--main-black);
    border: calc(var(--index) * 0.044) solid var(--main-black);
    margin-top: calc(var(--index) * 2.4);
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
`;
export const SortedProductsBody = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: calc(var(--index) * 0.527);
  @media screen and (max-width: 912px) and (min-height: 539px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: calc(var(--index) * 0.264);
  }
  @media screen and (max-width: 1180px) and (max-height: 539px) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: calc(var(--index) * 0.396);
  }
`;
