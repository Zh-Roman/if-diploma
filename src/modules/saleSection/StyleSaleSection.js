import styled from "styled-components";
import AirmasterWomen from "../../assets/images/AirmasterSneakers/WomenCollection/women.jpg";
import AirmasterWomenAdaptive from "../../assets/images/AirmasterSneakers/WomenCollection/women_main.jpg";
import AirmasterMen from "../../assets/images/AirmasterSneakers/MenCollection/men.jpg";
import AirmasterMenAdaptive from "../../assets/images/AirmasterSneakers/MenCollection/men_main.jpg";

export const StyleSaleSection = styled.section`
  color: var(--main-black);
  position: relative;
`;
export const CategoryContainer = styled.div`
  transform: translateY(-1%);
  width: 100%;
  height: ${(props) =>
    props.categoryToShow ? "calc(var(--index) * 19.55)" : 0};
  background-color: var(--main-white);
  display: flex;
  transition: height var(--transition);
  & div:first-child {
    margin-right: calc(var(--index) * 0.263);
  }

  & div:last-child {
    margin-left: calc(var(--index) * 0.263);
  }
  @media screen and (max-width: 851px) and (min-height: 541px) {
    height: ${(props) =>
      props.categoryToShow ? "calc(var(--index) * 12)" : 0};
  }
`;
export const AirmasterWomenCollection = styled.div`
  height: 100%;
  width: 50%;
  background: url(${AirmasterWomen}) center no-repeat;
  background-size: contain;
  position: relative;
  @media screen and (max-width: 851px) and (min-height: 541px) {
    background: url(${AirmasterWomenAdaptive}) center no-repeat;
    background-size: cover;
  }
`;
export const AirmasterMenCollection = styled.div`
  height: 100%;
  width: 50%;
  background: url(${AirmasterMen}) center no-repeat;
  background-size: contain;
  position: relative;
  @media screen and (max-width: 851px) and (min-height: 541px) {
    background: url(${AirmasterMenAdaptive}) center no-repeat;
    background-size: cover;
  }
`;

export const CollectionButton = styled.button`
  display: ${(props) => (props.categoryToShow ? "block" : "none")};
  cursor: pointer;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  color: var(--main-black);
  background-color: rgba(237, 231, 240, 0.7);
  border: calc(var(--index) * 0.044) solid var(--category-bgc);
  font-family: Helvetica73, sans-serif;
  font-size: calc(var(--index) * 0.878);
  line-height: calc(var(--index) * 1.05);
  padding: calc(var(--index) * 1.05) 0;
  @media screen and (max-width: 851px) and (min-height: 541px) {
    font-size: calc(var(--index) * 0.6);
    line-height: 1.2;
  }
`;
