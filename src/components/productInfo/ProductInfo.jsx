import React, { useState } from "react";
import PropTypes from "prop-types";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductDetails from "../productDetails/ProductDetails";
import {
  CareAndDetails,
  CareAndDetailsText,
  ProductDescription,
  ShippingReturns,
  ShippingReturnsText,
} from "../../configs/stringData";
import {
  ProductInfoButtonsContainer,
  ProductInfoBagButton,
  ProductInfoFavoritesButton,
  StyleProductInfo,
  ProductName,
  PriceSection,
  PreOrder,
  ColorTitle,
  ColorContainer,
  ColorBox,
  SizeTitle,
  SizeValueContainer,
  SizeValue,
} from "./StyleProductInfo";

function ProductInfo({ productData }) {
  const [selectedSizeValue, setSizeValue] = useState(0);
  const fixedDescription = [];

  for (
    let i = 0;
    i < productData.description.toLowerCase().split(". ").length;
    i += 1
  ) {
    fixedDescription.push(
      productData.description
        .toLowerCase()
        .split(". ")
        [i].replace(
          productData.description.toLowerCase().split(". ")[i][0],
          productData.description.toLowerCase().split(". ")[i][0].toUpperCase()
        )
    );
  }
  return (
    <StyleProductInfo>
      <ProductName>{productData.name}</ProductName>
      <PriceSection>
        {productData.price.currency} ${productData.price.value}
      </PriceSection>
      <PreOrder>pre-order</PreOrder>
      <ColorTitle>color</ColorTitle>
      <ColorContainer>
        <ColorBox colorHex={productData.color.hex} />
      </ColorContainer>
      <SizeTitle>size</SizeTitle>
      <SizeValueContainer>
        {productData.availableSizes[0].split(", ").map((value) => (
          <SizeValue
            selected={
              selectedSizeValue ===
              Number(!!productData.availableSizes[0].split(", ").indexOf(value))
            }
            role="presentation"
            key={productData.availableSizes[0].split(", ").indexOf(value)}
            id={productData.availableSizes[0].split(", ").indexOf(value)}
            onClick={(e) => setSizeValue(Number(e.target.id))}
          >
            {value}
          </SizeValue>
        ))}
      </SizeValueContainer>
      <ProductInfoButtonsContainer>
        <ProductInfoBagButton type="button">Add to bag</ProductInfoBagButton>
        <ProductInfoFavoritesButton type="button">
          <FontAwesomeIcon icon={faHeart} />
        </ProductInfoFavoritesButton>
      </ProductInfoButtonsContainer>
      <ProductDetails
        detailTitle={ProductDescription}
        detailBody={fixedDescription.join(". ")}
      />
      <ProductDetails
        detailTitle={ShippingReturns}
        detailBody={ShippingReturnsText}
      />
      <ProductDetails
        detailTitle={CareAndDetails}
        detailBody={CareAndDetailsText}
      />
    </StyleProductInfo>
  );
}

ProductInfo.propTypes = {
  productData: PropTypes.shape({
    id: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.shape({
      currency: PropTypes.string,
      value: PropTypes.string,
    }),
    color: PropTypes.shape({
      name: PropTypes.string,
      hex: PropTypes.string,
    }),
    availableSizes: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
  }),
};
export default ProductInfo;
