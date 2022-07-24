import styled from "styled-components";

export const StyleImageMagnifier = styled.div`
  position: relative;
  height: calc(var(--index) * 35.25);
  width: calc(var(--index) * 23.71);
  @media screen and (max-width: 851px) and (min-height: 541px) {
    width: 100vw;
    height: calc(var(--index) * 26.3);
  }
  @media screen and (max-height: 912px) {
    height: calc(var(--index) * 29.375);
    width: calc(var(--index) * 19.76);
  }
  @media screen and (max-height: 541px) {
    height: calc(var(--index) * 23.5);
    width: calc(var(--index) * 15.8);
  }
`;
export const MagnifierContent = styled.img`
  height: calc(var(--index) * 35.25);
  width: calc(var(--index) * 23.71);
  object-fit: cover;
  @media screen and (max-width: 851px) and (min-height: 541px) {
    width: 100vw;
    height: calc(var(--index) * 26.3);
  }
  @media screen and (max-height: 912px) {
    height: calc(var(--index) * 29.375);
    width: calc(var(--index) * 19.76);
  }
  @media screen and (max-height: 541px) {
    height: calc(var(--index) * 23.5);
    width: calc(var(--index) * 15.8);
  }
`;
export const MagnifierPointer = styled.div.attrs((props) => ({
  style: {
    display: props.showMagnifier ? "" : "none",
    top: `${props.yPos - 300 / 2}px`,
    left: `${props.xPos - 450 / 2}px`,
    backgroundImage: `url('${props.src}')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: `${props.imgWidth * 2}px ${props.imgHeight * 2}px`,
    backgroundPositionX: `${-props.xPos * 2 + 450 / 2}px`,
    backgroundPositionY: `${-props.yPos * 2 + 300 / 2}px`,
  },
}))`
  height: 300px;
  width: 450px;
  position: absolute;
  pointer-events: none;
  opacity: 1;
  border: 1px solid var(--light-gray);
`;
