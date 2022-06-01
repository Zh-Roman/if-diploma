import styled from "styled-components";

export const StyleProductInfo = styled.div`
  padding: calc(var(--index) * 1.317) calc(var(--index) * 4.06) 0
    calc(var(--index) * 2.634);
  color: var(--main-black);
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 851px) {
    padding: calc(var(--index) * 2.634) calc(var(--index) * 1.756) 0;
  }
  & > div {
    font-size: calc(var(--index) * 0.527);
    line-height: calc(var(--index) * 0.527);
    font-family: Helvetica45, sans-serif;
  }
`;
export const ProductName = styled.h3`
  font-family: Helvetica55, sans-serif;
  text-align: center;
  font-size: calc(var(--index) * 0.7);
  line-height: calc(var(--index) * 1.05);
  margin-bottom: calc(var(--index) * 0.878);
`;
export const PriceSection = styled.div`
  margin-bottom: calc(var(--index) * 0.44);
`;
export const PreOrder = styled.div`
  text-transform: uppercase;
  color: var(--light-gray);
  margin-bottom: calc(var(--index) * 1.317);
`;
export const ColorTitle = styled.div`
  text-transform: uppercase;
  color: var(--gray);
  margin-bottom: calc(var(--index) * 0.44);
`;
export const ColorContainer = styled.div`
  border: 2px solid var(--main-black);
  height: calc(var(--index) * 1.49);
  width: calc(var(--index) * 1.49);
  margin-bottom: calc(var(--index) * 1.317);
`;
export const ColorBox = styled.div`
  border: 2px solid var(--main-white);
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.colorHex};
`;
export const SizeTitle = styled.div`
  text-transform: uppercase;
  color: var(--gray);
  margin-bottom: calc(var(--index) * 0.878);
`;
export const SizeValueContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: calc(var(--index) * 1.756);

  & div:not(:last-child) {
    margin-right: calc(var(--index) * 0.878);
  }
`;
export const SizeValue = styled.div`
  text-align: center;
  cursor: pointer;
  padding: 0 calc(var(--index) * 0.22) calc(var(--index) * 0.22);
  margin-bottom: ${(props) => (props.selected ? "-2px" : "0")};
  border-bottom: ${(props) =>
    props.selected ? "2px solid var(--main-black)" : "none"};
`;
export const ProductInfoButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  height: calc(var(--index) * 2.2);
  margin-bottom: calc(var(--index) * 1.756);

  & button {
    font-family: Helvetica45, sans-serif;
    text-transform: uppercase;
    background-color: var(--main-black);
    color: var(--main-white);
    font-size: calc(var(--index) * 0.7);
    line-height: calc(var(--index) * 0.7);
    border: none;
    height: 100%;
  }
`;
export const ProductInfoBagButton = styled.button`
  width: max-content;
  padding: 0 calc(var(--index) * 2.04);
  margin-right: calc(var(--index) * 0.088);
`;
export const ProductInfoFavoritesButton = styled.button`
  width: calc(var(--index) * 2.2);
`;
