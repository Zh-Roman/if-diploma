import React, { useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/parallax";

import { FreeMode, Mousewheel, Parallax, Controller } from "swiper";

import PropTypes from "prop-types";
import {
  PersolDescriptionText,
  PersolLogoText,
} from "../../configs/stringData";
import {
  StylePersolSection,
  PersolDescription,
  PersolLogo,
  SliderImg,
} from "./StylePersolSection";
import useWindowSize from "../../hooks/useWindowSize";

function PersolSection({ persolCollectionData }) {
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const [hiddenDescription, setHiddenDescription] = useState(false);
  const windowWidth = useWindowSize().sizeWidth;
  const windowHeight = useWindowSize().sizeHeight;
  let sliderPerView = 3.5;
  if (windowWidth <= 850 && windowHeight > 539) {
    sliderPerView = 1;
  }
  const handleOpenSlide = (e) => {
    e.target.closest(".slider__item").classList.toggle("opened");
  };
  return (
    <StylePersolSection
      hiddenDescription={hiddenDescription}
      className="_padding-top"
    >
      <PersolDescription className={hiddenDescription ? "hidden" : null}>
        <PersolLogo>{PersolLogoText}</PersolLogo>
        <p>{PersolDescriptionText}</p>
      </PersolDescription>
      <Swiper
        modules={[FreeMode, Parallax, Mousewheel, Controller]}
        freeMode
        parallax
        mousewheel
        centeredSlides
        slidesPerView={sliderPerView}
        spaceBetween={24}
        controller={{ control: controlledSwiper }}
        onActiveIndexChange={(slider) => {
          if (slider.activeIndex > 0) {
            setHiddenDescription(true);
          } else {
            setHiddenDescription(false);
          }
        }}
        className="slider__main"
      >
        {persolCollectionData?.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className="slider__item"
            onClick={handleOpenSlide}
          >
            <SliderImg
              data-swiper-parallax={slide.dataSwiperParallax}
              style={{ backgroundImage: slide.imageUrl }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        modules={[Parallax, Controller]}
        parallax
        centeredSlides
        slidesPerView={sliderPerView}
        spaceBetween={24}
        onSwiper={setControlledSwiper}
        className="slider__bg"
      >
        {persolCollectionData?.map((slide) => (
          <SwiperSlide key={slide.id} className="slider__item">
            <SliderImg
              data-swiper-parallax={slide.dataSwiperParallax}
              style={{ backgroundImage: slide.imageUrl }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </StylePersolSection>
  );
}

PersolSection.propTypes = {
  persolCollectionData: PropTypes.arrayOf(
    PropTypes.shape({
      dataSwiperParallax: PropTypes.string,
      imageUrl: PropTypes.string,
      id: PropTypes.string,
    })
  ),
};
export default PersolSection;
