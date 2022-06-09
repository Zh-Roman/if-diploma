import React from "react";
import styled from "styled-components";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import { SaleHashtag, LogoHashtag } from "../../configs/stringData";
import SliderWithFourEl from "../../components/sliderWithFourEl/SliderWithFourEl";

const StyleSaleSection = styled.section`
  color: var(--main-black);
`;

const cardData = [
  {
    id: 1,
    imgUrl: require("../../assets/images/saleSlider/1.jpg"),
    imgAlt: "first picture",
    saleAmount: "-55%",
    fullPrice: "$13.00",
    totalPrice: "$5.90",
  },
  {
    id: 2,
    imgUrl: require("../../assets/images/saleSlider/2.jpg"),
    imgAlt: "second picture",
    saleAmount: "-39%",
    fullPrice: "$8.00",
    totalPrice: "$4.90",
  },
  {
    id: 3,
    imgUrl: require("../../assets/images/saleSlider/3.jpg"),
    imgAlt: "third picture",
    saleAmount: "-58%",
    fullPrice: "$14.00",
    totalPrice: "$5.90",
  },
  {
    id: 4,
    imgUrl: require("../../assets/images/saleSlider/4.jpg"),
    imgAlt: "fourth picture",
    saleAmount: "-34%",
    fullPrice: "$9.00",
    totalPrice: "$5.90",
  },
];
function SaleSection() {
  return (
    <StyleSaleSection className="_container">
      <SectionTitle>
        {LogoHashtag}
        <span>{SaleHashtag}</span>
      </SectionTitle>
      <SliderWithFourEl cardData={cardData} />
    </StyleSaleSection>
  );
}

export default SaleSection;
