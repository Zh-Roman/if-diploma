import React from "react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css/bundle";
import { SwiperSlide, Swiper } from "swiper/react";
import PropTypes from "prop-types";
import SliderCard from "../sliderCard/SliderCard";
import StyleSliderWithFourEl from "./StyleSliderWithFourEl";

SwiperCore.use([Navigation]);

function SliderWithFourEl({ cardData }) {
  return (
    <StyleSliderWithFourEl>
      <Swiper navigation spaceBetween={24} slidesPerView={4} loop>
        {cardData.map((item) => (
          <SwiperSlide key={item.id}>
            <SliderCard cardData={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </StyleSliderWithFourEl>
  );
}

SliderWithFourEl.propTypes = {
  cardData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      imgUrl: PropTypes.string,
      imgAlt: PropTypes.string,
      saleAmount: PropTypes.string,
      fullPrice: PropTypes.string,
      totalPrice: PropTypes.string,
    })
  ),
};
export default SliderWithFourEl;