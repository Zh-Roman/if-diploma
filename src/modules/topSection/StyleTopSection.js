import styled from "styled-components";
import mainBackground from "../../assets/images/topSection/mainBackground.jpg";

export const StyleTopSection = styled.section`
  min-height: 100vh;
  background: url(${mainBackground}) top no-repeat;
  background-size: cover;
  color: var(--main-white);
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: end;
  padding-left: calc(var(--index) * 6.6);
  padding-bottom: calc(var(--index) * 4.4);
  @media screen and (max-width: 851px) and (min-height: 541px) {
    position: relative;
    min-height: calc(var(--index) * 19.3);
    margin-bottom: calc(100vh - (var(--index) * 19.3));
  }
`;
export const TopSectionContainer = styled.div`
  @media screen and (max-width: 851px) and (min-height: 541px) {
    height: calc(100vh - (var(--index) * 19.3));
    width: 100vw;
    background-color: var(--main-white);
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    left: 0;
    bottom: 0;
    transform: translateY(100%);
    padding: calc(var(--index) * 1.756) var(--index);
    z-index: 50;
    & * {
      color: var(--main-black);
    }

    & h2 {
      max-width: min-content;
      font-size: calc(var(--index) * 1.4);
    }

    & p {
      white-space: normal;
      margin-right: calc(var(--index) * -0.044);
      margin-left: calc(var(--index) * -0.044);
      font-size: calc(var(--index) * 0.527);
      line-height: calc(var(--index) * 0.79);
      width: fit-content;
    }

    & button {
      border: calc(var(--index) * 0.044) solid var(--main-black);
    }
  }
`;
