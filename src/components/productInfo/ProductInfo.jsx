import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ProductDetails from "../productDetails/ProductDetails";
import {
  AddingToBag,
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
import { getProductToBag } from "../../ducks/productsToBag/actions";
import { productsToBagSelector } from "../../ducks/productsToBag/selectors";
import { sendOrderFromBagSucceeded } from "../../ducks/orderRequest/actions";
import { productsToFavoritesSelector } from "../../ducks/productsToFavorites/selectors";
import { getProductToFavorites } from "../../ducks/productsToFavorites/actions";

function ProductInfo({ productData }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedSizeValue, setSizeValue] = useState(0);
  const fixedDescription = [];
  const [productToBagData, setProductToBagData] = useState({});
  const productToBagSelector = useSelector(productsToBagSelector).products;
  const productToFavoritesSelector = useSelector(productsToFavoritesSelector);

  useEffect(() => {
    setProductToBagData({
      productId: productData?.id,
      productImg: productData?.images[0],
      productName: productData?.name,
      productColor: productData?.color.name,
      productSizeList: productData?.availableSizes,
      productPrice: {
        currency: productData?.price.currency,
        value: productData?.price.value,
        totalPrice: productData?.price.value,
      },
      productQuantity: 1,
      selectedSize:
        productData?.availableSizes[0].split(", ")[selectedSizeValue],
    });
  }, [productData, selectedSizeValue]);
  const handleProductToBag = () => {
    let checkProductData = true;
    productToBagSelector.forEach((productToCheck) => {
      if (productToCheck.productId === productToBagData.productId) {
        checkProductData = false;
      }
    });
    if (checkProductData) {
      dispatch(getProductToBag(productToBagData));
      dispatch(sendOrderFromBagSucceeded(null));
      navigate("/bag");
    } else {
      navigate("/bag");
    }
  };
  const handleProductToFavorites = () => {
    let checkProductData = true;
    productToFavoritesSelector.forEach((productToCheck) => {
      if (productToCheck.productId === productToBagData.productId) {
        checkProductData = false;
      }
    });
    if (checkProductData) {
      dispatch(getProductToFavorites(productToBagData));
      navigate("/favorites");
    } else {
      navigate("/favorites");
    }
  };
  for (
    let i = 0;
    i < productData?.description.toLowerCase().split(". ").length;
    i += 1
  ) {
    fixedDescription.push(
      productData?.description
        .toLowerCase()
        .split(". ")
        [i].replace(
          productData?.description.toLowerCase().split(". ")[i][0],
          productData?.description.toLowerCase().split(". ")[i][0].toUpperCase()
        )
    );
  }
  return (
    <StyleProductInfo>
      <ProductName>{productData?.name}</ProductName>
      <PriceSection>
        {productData?.price.currency} ${productData?.price.value}
      </PriceSection>
      <PreOrder>pre-order</PreOrder>
      <ColorTitle>color</ColorTitle>
      <ColorContainer>
        <ColorBox colorHex={productData?.color.hex} />
      </ColorContainer>
      <SizeTitle>size</SizeTitle>
      <SizeValueContainer>
        {productData?.availableSizes[0].split(", ").map((value) => (
          <SizeValue
            selected={
              selectedSizeValue ===
              Number(productData?.availableSizes[0].split(", ").indexOf(value))
            }
            role="presentation"
            key={productData?.availableSizes[0].split(", ").indexOf(value)}
            id={productData?.availableSizes[0].split(", ").indexOf(value)}
            onClick={(e) => {
              setSizeValue(Number(e.target.id));
            }}
          >
            {value}
          </SizeValue>
        ))}
      </SizeValueContainer>
      <ProductInfoButtonsContainer>
        <ProductInfoBagButton onClick={handleProductToBag} type="button">
          {AddingToBag}
        </ProductInfoBagButton>
        <ProductInfoFavoritesButton
          onClick={handleProductToFavorites}
          type="button"
        >
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
