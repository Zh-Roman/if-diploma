import styled from "styled-components";

export const StyleSliderCard = styled.div`
  display: flex;
  flex-direction: column;
`;
export const SliderImgContainer = styled.div`
  height: calc(var(--index) * 17.56);
  width: calc(var(--index) * 13.15);
  color: var(--main-white);
  position: relative;
  margin-bottom: calc(var(--index) * 0.527);

  & svg {
    display: inline-block;
    position: absolute;
    top: calc(var(--index) * 0.527);
    right: calc(var(--index) * 0.527);
    width: calc(var(--index) * 1.23);
    height: calc(var(--index) * 1.23);
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
  bottom: 0;
  background-color: var(--main-red);
  height: calc(var(--index) * 1.05);
  width: calc(var(--index) * 1.93);
  font-weight: 400;
  font-size: calc(var(--index) * 0.615);
  display: flex;
  align-items: center;
  justify-content: center;
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
`;
export const TotalPrice = styled.div`
  font-weight: 700;
  color: var(--main-red);
  font-size: calc(var(--index) * 0.878);
`;
