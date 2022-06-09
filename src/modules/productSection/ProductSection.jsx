import React from "react";
import styled from "styled-components";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductInfo from "../../components/productInfo/ProductInfo";
import ImageMagnifier from "../../components/imageMagnifier/ImageMagnifier";
import "swiper/css/bundle";
import useWindowSize from "../../hooks/useWindowSize";

SwiperCore.use([Navigation]);

const productData = {
  id: "96a2c4e3-0a4b-41ec-96d2-971223069fe4",
  type: "Denim",
  name: "RIPPED STRAIGHT LEG HIGH RISE JEANS",
  price: {
    currency: "USD",
    value: "3990",
  },
  color: {
    name: "Light blue",
    hex: "#B6E1F1",
  },
  availableSizes: ["S, M"],
  description:
    "HIGH-WAISTED STRAIGHT LEG JEANS. FIVE POCKETS AND WASHED EFFECT. RIPPED DETAIL AT KNEE. UNFINISHED HEM. FRONT METAL BUTTON CLOSURE.",
  images: [
    "https://res.cloudinary.com/intellectfox/image/upload/v1619556317/Diploma%20Front-end/Online%20shop_Modmikky/Denim/jeans_1_1.webp",
    "https://res.cloudinary.com/intellectfox/image/upload/v1619556391/Diploma%20Front-end/Online%20shop_Modmikky/Denim/jeans_1_2.webp",
  ],
};
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
  const windowWidth = useWindowSize().sizeWidth;
  const windowHeight = useWindowSize().sizeHeight;
  return (
    <StyleProductSection>
      {windowWidth <= 912 && windowHeight > 540 && (
        <ProductImagesContainer>
          <Swiper navigation spaceBetween={0} slidesPerView={1} loop>
            <SwiperSlide>
              <ImageMagnifier
                src={productData.images[0]}
                alt={productData.name}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ImageMagnifier
                src={productData.images[1]}
                alt={productData.name}
              />
            </SwiperSlide>
          </Swiper>
        </ProductImagesContainer>
      )}
      {windowWidth > 912 && (
        <ProductImagesContainer>
          <ImageMagnifier src={productData.images[0]} alt={productData.name} />
          <ImageMagnifier src={productData.images[1]} alt={productData.name} />
        </ProductImagesContainer>
      )}
      {windowWidth <= 912 && windowHeight <= 540 && (
        <ProductImagesContainer>
          <ImageMagnifier src={productData.images[0]} alt={productData.name} />
          <ImageMagnifier src={productData.images[1]} alt={productData.name} />
        </ProductImagesContainer>
      )}
      <ProductInfo productData={productData} />
    </StyleProductSection>
  );
}

export default ProductSection;
