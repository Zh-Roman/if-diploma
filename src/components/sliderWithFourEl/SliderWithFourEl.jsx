import React from "react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css/bundle";
import { SwiperSlide, Swiper } from "swiper/react";
import PropTypes from "prop-types";
import StyleSliderWithFourEl from "./StyleSliderWithFourEl";
import useWindowSize from "../../hooks/useWindowSize";
import ProductCard from "../productCard/ProductCard";

SwiperCore.use([Navigation]);

function SliderWithFourEl({ collectionData, sliderToShow }) {
  const windowWidth = useWindowSize().sizeWidth;
  const windowHeight = useWindowSize().sizeHeight;
  let sliderPerView = 4;
  if (windowWidth <= 912 && windowHeight > 539) {
    sliderPerView = 2;
  } else if (windowWidth <= 1180 || windowHeight < 539) {
    sliderPerView = 3;
  }
  return (
    <StyleSliderWithFourEl sliderToShow={sliderToShow}>
      <Swiper navigation spaceBetween={24} slidesPerView={sliderPerView} loop>
        {collectionData?.map((item) => (
          <SwiperSlide key={item.id}>
            <ProductCard productsToRender={item} forSlider />
          </SwiperSlide>
        ))}
      </Swiper>
    </StyleSliderWithFourEl>
  );
}

SliderWithFourEl.propTypes = {
  collectionData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.shape({
        currency: PropTypes.string,
        value: PropTypes.string,
        saleAmount: PropTypes.string,
        fullPrice: PropTypes.string,
      }),
      color: PropTypes.shape({
        name: PropTypes.string,
        hex: PropTypes.string,
      }),
      availableSizes: PropTypes.arrayOf(PropTypes.string),
      description: PropTypes.string,
      images: PropTypes.arrayOf(PropTypes.string),
    })
  ),
  sliderToShow: PropTypes.number,
};
export default SliderWithFourEl;
