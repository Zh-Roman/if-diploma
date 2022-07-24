import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import ProductInfo from "../../components/productInfo/ProductInfo";
import ImageMagnifier from "../../components/imageMagnifier/ImageMagnifier";
import "swiper/css/bundle";
import useWindowSize from "../../hooks/useWindowSize";
import { sortedProductByIdDataSelector } from "../../ducks/sortedProducts/selectors";

SwiperCore.use([Navigation]);

export const StyleProductSection = styled.div`
  padding-top: calc(var(--index) * 3.29);
  padding-bottom: calc(var(--index) * 0.44);
  display: flex;
  @media screen and (max-width: 912px) and (min-height: 541px) {
    flex-direction: column;
  }
`;
export const ProductImagesContainer = styled.div`
  display: flex;
`;

function ProductSection() {
  const productSectionRef = useRef(null);
  const productData = useSelector(sortedProductByIdDataSelector);
  const windowWidth = useWindowSize().sizeWidth;
  const windowHeight = useWindowSize().sizeHeight;
  useEffect(() => {
    productSectionRef.current.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  }, [productData]);
  return (
    <StyleProductSection ref={productSectionRef}>
      {windowWidth <= 912 && windowHeight > 540 && (
        <ProductImagesContainer>
          <Swiper navigation spaceBetween={0} slidesPerView={1} loop>
            <SwiperSlide>
              <ImageMagnifier
                src={productData?.images[0]}
                alt={productData?.name}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ImageMagnifier
                src={productData?.images[1]}
                alt={productData?.name}
              />
            </SwiperSlide>
          </Swiper>
        </ProductImagesContainer>
      )}
      {windowWidth > 912 && (
        <ProductImagesContainer>
          <ImageMagnifier
            src={productData?.images[0]}
            alt={productData?.name}
          />
          <ImageMagnifier
            src={productData?.images[1]}
            alt={productData?.name}
          />
        </ProductImagesContainer>
      )}
      {windowWidth <= 912 && windowHeight <= 540 && (
        <ProductImagesContainer>
          <ImageMagnifier
            src={productData?.images[0]}
            alt={productData?.name}
          />
          <ImageMagnifier
            src={productData?.images[1]}
            alt={productData?.name}
          />
        </ProductImagesContainer>
      )}
      <ProductInfo productData={productData} />
    </StyleProductSection>
  );
}

export default ProductSection;
