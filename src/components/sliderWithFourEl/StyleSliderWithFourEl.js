import styled from "styled-components";
import ArrowSVG from "../../assets/images/SVG/sliderArrow.svg";

const StyleSliderWithFourEl = styled.div`
  width: 100%;
  position: relative;

  .swiper {
    position: static;
  }

  .swiper-button-next,
  .swiper-button-prev {
    margin-top: 0;
    position: absolute;
    transform: translate(50%, -50%);
    top: calc(var(--index) * 8.78);
    right: 0;
    width: calc(var(--index) * 3.07);
    height: calc(var(--index) * 3.07);
    background-image: url(${ArrowSVG});
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: center;
    border-radius: 50%;
    box-shadow: 0 4px 4px rgba(0 0 0 0.25);
  }

  .swiper-button-prev {
    transform: translate(-50%, -50%) scale(-1, 1);
    left: 0;
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    display: none;
  }
`;
export default StyleSliderWithFourEl;