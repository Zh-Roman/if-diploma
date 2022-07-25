import styled from "styled-components";

export const StyleNewArrivalSection = styled.section`
  width: 100vw;
  height: 100vh;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
  }

  .swiper-pagination-bullet {
    width: calc(var(--index) * 0.7);
    height: calc(var(--index) * 0.7);
    background-color: var(--light-gray);
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    background-color: var(--main-black);
  }

  .swiper-button-prev:after,
  .swiper-button-next:after {
    color: var(--main-white);
    font-size: calc(var(--index) * 2.2);
  }

  .swiper-button-prev {
    left: calc(var(--index) * 1.1);
  }

  .swiper-button-next {
    right: calc(var(--index) * 1.1);
  }

  @media screen and (max-width: 851px) and (min-height: 541px) {
    .swiper-button-prev,
    .swiper-button-next {
      display: none;
    }
  }
`;
export const SliderContentContainer = styled.div`
  position: relative;
  height: 100%;

  & img,
  video {
    display: block;
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 851px) and (min-height: 541px) {
    display: flex;
    flex-direction: column;
    background-color: var(--main-white);
    & img,
    video {
      height: 50vh;
    }
  }
`;
export const InfoContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  width: fit-content;
  position: absolute;
  z-index: 1;
  left: 5%;
  top: 40%;
  transform: translateY(-50%);
  & button {
    background-color: rgba(0, 0, 0, 0.5);
  }

  .DGLogo {
    display: block;
    width: 30vw;
    height: 10vh;
    fill: ${(props) =>
      props.contentColor ? "var(--main-black)" : "var(--main-white)"};
    padding: 0 calc(var(--index) * 0.22);
    background-color: ${(props) =>
      props.contentColor ? "rgba(255, 255, 255, 0.5)" : "none"};
    box-shadow: ${(props) =>
      props.contentColor ? "0 5px 10px 2px rgba(34, 60, 80, 0.2)" : "none"};
  }
  @media screen and (max-width: 851px) and (min-height: 541px) {
    top: 0;
    left: 0;
    transform: translateY(0);
    margin-top: 50vh;
    width: 100vw;
    justify-content: space-between;
    align-items: center;
    .DGLogo {
      width: 100%;
      padding: 0 calc(var(--index) * 0.66);
      fill: var(--main-black);
      box-shadow: none;
    }

    & button {
      background-color: var(--main-white);
      color: black;
      border: calc(var(--index) * 0.044) solid var(--main-black);
    }
  }
`;
export const NewArrivalTextContent = styled.div`
  font-family: Raleway300, sans-serif;
  font-size: calc(var(--index) * 1.4);
  line-height: calc(var(--index) * 1.6);
  white-space: pre;
  color: var(--main-white);
  margin-bottom: calc(var(--index) * 0.44);

  @media screen and (max-width: 851px) and (min-height: 541px) {
    color: var(--main-black);
    font-size: calc(var(--index) * 1.05);
    text-align: center;
    white-space: normal;
    width: 75%;
  }
`;
