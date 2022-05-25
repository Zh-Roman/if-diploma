import React from "react";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import {
  StyleSliderCard,
  SliderImgContainer,
  SliderImg,
  SaleAmount,
  PriceContainer,
  FullPrice,
  TotalPrice,
} from "./StyleSliderCard";

function SliderCard({ cardData }) {
  return (
    <StyleSliderCard>
      <SliderImgContainer>
        <SliderImg src={cardData.imgUrl} alt={cardData.imgAlt} />
        <FontAwesomeIcon icon={faHeart} />
        <SaleAmount>{cardData.saleAmount}</SaleAmount>
      </SliderImgContainer>
      <PriceContainer>
        <FullPrice>{cardData.fullPrice}</FullPrice>
        <TotalPrice>{cardData.totalPrice}</TotalPrice>
      </PriceContainer>
    </StyleSliderCard>
  );
}

SliderCard.propTypes = {
  cardData: PropTypes.shape({
    id: PropTypes.number,
    imgUrl: PropTypes.string,
    imgAlt: PropTypes.string,
    saleAmount: PropTypes.string,
    fullPrice: PropTypes.string,
    totalPrice: PropTypes.string,
  }),
};
export default SliderCard;
