import styled from "styled-components";

export const StyleSliderCard = styled.section`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  position: relative;
`;
export const SliderImgContainer = styled.div`
  height: 100%;
  width: 100%;
  color: var(--main-white);
  margin-bottom: calc(var(--index) * 0.527);

  & svg {
    display: inline-block;
    position: absolute;
    top: calc(var(--index) * 0.527);
    right: calc(var(--index) * 0.527);
    width: calc(var(--index) * 1.23);
    height: calc(var(--index) * 1.23);
    @media screen and (max-width: 851px) {
      width: calc(var(--index) * 0.79);
      height: calc(var(--index) * 0.79);
    }
  }
  .full_heart {
    color: var(--main-red);
  }
  .empty_heart {
    color: var(--main-black);
  }
`;
export const SliderImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;
export const SaleAmount = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  background-color: var(--main-red);
  height: calc(var(--index) * 1.05);
  width: calc(var(--index) * 1.93);
  font-weight: 400;
  font-size: calc(var(--index) * 0.615);
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 851px) and (min-height: 541px) {
    font-size: calc(var(--index) * 0.35);
    height: calc(var(--index) * 0.66);
    width: calc(var(--index) * 1.185);
  }
`;
export const PriceContainer = styled.div`
  display: flex;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(var(--index) * 1.4);
    width: fit-content;
  }
`;
export const FullPrice = styled.div`
  text-decoration: line-through;
  font-weight: 400;
  color: var(--main-black);
  font-size: calc(var(--index) * 0.79);
  margin-right: calc(var(--index) * 0.527);
  @media screen and (max-width: 851px) and (min-height: 541px) {
    font-size: calc(var(--index) * 0.44);
  }
`;
export const TotalPrice = styled.div`
  font-weight: 700;
  color: var(--main-red);
  font-size: calc(var(--index) * 0.878);
  @media screen and (max-width: 851px) and (min-height: 541px) {
    font-size: calc(var(--index) * 0.527);
  }
`;
