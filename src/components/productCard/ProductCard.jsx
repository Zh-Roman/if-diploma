import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as fullHeart } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  PriceContainer,
  SliderImg,
  SliderImgContainer,
  StyleSliderCard,
} from "../sliderCard/StyleSliderCard";
import { getSelectedProductId } from "../../ducks/selectedProductId/actions";
import { getSortedProductsRequested } from "../../ducks/sortedProducts/actions";
import {
  deleteProductFromFavorites,
  getProductToFavorites,
} from "../../ducks/productsToFavorites/actions";
import { productsToFavoritesSelector } from "../../ducks/productsToFavorites/selectors";

export const PriceSectionValue = styled.div`
  font-size: calc(var(--index) * 0.878);
`;

function ProductCard({ productsToRender }) {
  const productToFavoritesSelector = useSelector(productsToFavoritesSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleNavigate = (e) => {
    dispatch(getSelectedProductId(e.target.closest("img").id));
    dispatch(getSortedProductsRequested());
    navigate(`/product/${e.target.closest("img").id}`);
  };
  const handleProductToFavoritesClick = (e) => {
    if (
      productToFavoritesSelector.find(
        ({ productId }) => productId === e.target.closest("svg").id
      )
    ) {
      dispatch(
        deleteProductFromFavorites(
          productToFavoritesSelector.find(
            ({ productId }) => productId === e.target.closest("svg").id
          )
        )
      );
      e.target.closest("svg").classList.remove("full_heart");
      const remainingProducts = productToFavoritesSelector.filter(
        (item) => item.productId !== e.target.closest("svg").id
      );
      localStorage.setItem(
        "favoritesStorage",
        JSON.stringify(remainingProducts)
      );
    } else {
      const productToFavorites = productsToRender.filter(
        (item) => item.id === e.target.closest("svg").id
      )[0];
      dispatch(
        getProductToFavorites({
          productId: productToFavorites?.id,
          productImg: productToFavorites?.images[0],
          productName: productToFavorites?.name,
          productColor: productToFavorites?.color.name,
          productSizeList: productToFavorites?.availableSizes,
          productPrice: {
            currency: productToFavorites?.price.currency,
            value: productToFavorites?.price.value,
            totalPrice: productToFavorites?.price.value,
          },
          productQuantity: 1,
          selectedSize: productToFavorites?.availableSizes[0].split(", ")[0],
        })
      );
    }
  };
  useEffect(() => {}, [productToFavoritesSelector]);
  return (
    <>
      {productsToRender.map((product) => (
        <StyleSliderCard key={product.id} id={product.id}>
          <SliderImgContainer role="presentation">
            <SliderImg
              id={product.id}
              src={product.images[0]}
              alt={product.name}
              onClick={handleNavigate}
            />
            <FontAwesomeIcon
              className={
                productToFavoritesSelector.find(
                  ({ productId }) => productId === product.id
                )
                  ? "full_heart"
                  : ""
              }
              id={product.id}
              icon={
                productToFavoritesSelector.find(
                  ({ productId }) => productId === product.id
                )
                  ? fullHeart
                  : faHeart
              }
              onClick={handleProductToFavoritesClick}
            />
          </SliderImgContainer>
          <PriceContainer>
            <PriceSectionValue>{`${product.price.currency} ${product.price.value}`}</PriceSectionValue>
          </PriceContainer>
        </StyleSliderCard>
      ))}
    </>
  );
}

ProductCard.propTypes = {
  productsToRender: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  ),
};
export default ProductCard;
