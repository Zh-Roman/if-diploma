import styled from "styled-components";

export const StylePersolSection = styled.section`
  width: 100%;
  height: 100vh;
  background-color: var(--main-black);
  color: var(--main-white);
  overflow: hidden;
  font-family: Raleway, sans-serif;

  .slider__main {
    height: 100%;
    transform: rotate(15deg);
    overflow: visible;
    top: 10vh;
  }

  .swiper-wrapper {
    transition: var(--transition) !important;
    will-change: transform;
  }

  .slider__item {
    max-height: 75vh;
    overflow: hidden;
    cursor: pointer;
    transition: transform var(--transition), box-shadow var(--transition);
  }

  .slider__bg {
    height: 100%;
    overflow: visible;
    z-index: 0;
    transform: rotate(-20deg) !important;
    top: -90vh;
    left: -10vh;
    opacity: 0.25;
    filter: blur(120px) saturate(10);
  }

  .slider__bg .slider__item {
    max-height: 100vh;
  }

  .slider__item.opened {
    z-index: 2;
    transform: rotate(-15deg) scale(1.4);
    box-shadow: rgb(0 0 0 /0.75) 0 0 0 10000px;
  }

  .hidden {
    opacity: 0;
    transform: translateY(5vh);
    transition: var(--transition);
  }

  .hidden p {
    transform: translateY(2vh);
  }

  @media screen and (max-width: 851px) and (min-height: 541px) {
    .slider__main {
      transition: max-height var(--transition);
      max-height: ${(props) => (props.hiddenDescription ? "100%" : "50%")};
      top: 5vh;
    }

    .slider__item.opened {
      transform: rotate(-15deg) scale(1.1);
    }
  }
`;
export const SliderImg = styled.div`
  width: 300%;
  height: 100%;
  background-size: cover;
  position: absolute;
  left: -100%;
  transition: var(--transition) !important;
  will-change: transform;
  @media screen and (max-width: 851px) and (min-height: 541px) {
    width: 200%;
    height: 100%;
    left: -60%;
  }
`;
export const PersolDescription = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 5vw;
  max-width: 26vw;
  transition: opacity var(--transition) transform var(--transition);

  & p {
    font-family: Raleway100, sans-serif;
    font-size: calc(var(--index) * 0.8);
    line-height: 1.8;
    opacity: 0.9;
    transition: transform var(--transition);
    transition-duration: 3s;
  }

  @media screen and (max-width: 851px) and (min-height: 541px) {
    top: auto;
    bottom: 5vh;
    max-width: 100vw;
    transform: translateY(0);

    & p {
      line-height: 1.2;
      text-align: justify;
      margin-right: 5vw;
    }
  }
`;
export const PersolLogo = styled.div`
  font-family: Raleway300, sans-serif;
  font-size: calc(var(--index) * 1.317);
  line-height: calc(var(--index) * 1.317);
  font-weight: 700;
  display: inline-block;
  margin-bottom: calc(var(--index));
  background: linear-gradient(30deg, #d33321, #ffffff, #5c99b5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media screen and (max-width: 851px) and (min-height: 541px) {
    font-size: calc(var(--index) * 1.15);
    line-height: 1;
  }
`;
