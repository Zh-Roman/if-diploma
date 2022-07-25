import styled from "styled-components";

export const SelectedProductToBagStyle = styled.div`
  border-top: calc(var(--index) * 0.044) solid var(--light-gray);
  border-bottom: calc(var(--index) * 0.044) solid var(--light-gray);
  padding: calc(var(--index) * 1.317) 0;
  width: 100%;
  @media screen and (max-width: 851px) {
    padding: calc(var(--index) * 1.317) calc(var(--index) * 0.878);
  }
`;
export const ProductToBagSection = styled.div`
  width: 100%;
  display: flex;
`;
export const ProductToBagImageContainer = styled.div`
  width: calc(var(--index) * 7.02);
  height: calc(var(--index) * 10.1);
  margin-bottom: calc(var(--index) * 1.756);
  margin-right: calc(var(--index) * 0.878);
`;
export const ProductToBagImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const ProductToBagInfoSection = styled.div`
  color: var(--main-black);

  & div {
    font-family: Helvetica55, sans-serif;
  }
`;
export const ProductToBagName = styled.div`
  font-size: calc(var(--index) * 0.7);
  line-height: calc(var(--index) * 1.05);
  margin-bottom: calc(var(--index) * 0.44);
  @media screen and (max-width: 851px) {
    width: 50vw;
  }
`;
export const ProductToBagPrice = styled.div`
  font-size: calc(var(--index) * 0.527);
  line-height: calc(var(--index) * 0.527);
  margin-bottom: calc(var(--index) * 1.25);
`;
export const ProductToBagColor = styled.div`
  font-size: calc(var(--index) * 0.527);
  line-height: calc(var(--index) * 0.527);
  margin-bottom: calc(var(--index) * 0.66);
`;
export const ProductToBagSizeContainer = styled.div`
  display: flex;
`;
export const ProductToBagQuantityContainer = styled.div`
  display: flex;
`;
export const ProductToBagSize = styled.div`
  display: flex;
  font-size: calc(var(--index) * 0.527);
  line-height: calc(var(--index) * 0.527);
  margin-bottom: calc(var(--index) * 0.66);

  & div {
    margin-left: calc(var(--index) * 0.066);
  }
`;
export const ProductToBagQuantity = styled.div`
  display: flex;
  font-size: calc(var(--index) * 0.527);
  line-height: calc(var(--index) * 0.527);
  margin-bottom: calc(var(--index) * 0.66);

  & div {
    margin-left: calc(var(--index) * 0.066);
  }
`;
export const AngleDownIcon = styled.div`
  cursor: pointer;
  margin-left: calc(var(--index) * 0.29);
  width: calc(var(--index) * 0.527);
  height: calc(var(--index) * 0.527);
  display: flex;
  align-items: center;

  & svg {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
`;
export const SelectedOption = styled.div`
  cursor: pointer;
`;
export const ProductNavigationSection = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: ${(props) => props.justifyСontent};
  margin: 0 calc(var(--index) * 0.527);
`;
export const ProductRemoveSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`;
export const ProductRemoveSectionIconSection = styled.div`
  width: calc(var(--index) * 0.527);
  height: calc(var(--index) * 0.527);
  margin-right: calc(var(--index) * 0.3);
  display: flex;
  align-items: center;

  & svg {
    color: var(--main-black);
    display: inline-block;
    width: 100%;
    height: 100%;
  }
`;
export const RemoveSectionTitle = styled.div`
  text-transform: uppercase;
  color: var(--main-black);
  font-size: calc(var(--index) * 0.527);
  line-height: calc(var(--index) * 0.527);
`;
