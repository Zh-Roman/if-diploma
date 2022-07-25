import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as fullHeart } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  FullPrice,
  PriceContainer,
  SaleAmount,
  SliderImg,
  SliderImgContainer,
  StyleSliderCard,
  TotalPrice,
} from "../sliderCard/StyleSliderCard";
import { getSelectedProductId } from "../../ducks/selectedProductId/actions";
import {
  getSortedProductByID,
  getSortedProductsRequested,
} from "../../ducks/sortedProducts/actions";
import {
  deleteProductFromFavorites,
  getProductToFavorites,
} from "../../ducks/productsToFavorites/actions";
import { productsToFavoritesSelector } from "../../ducks/productsToFavorites/selectors";

export const PriceSectionValue = styled.div`
  font-size: calc(var(--index) * 0.878);
`;

function ProductCard({ productsToRender, forSlider }) {
  const productToFavoritesSelector = useSelector(productsToFavoritesSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleNavigate = (e) => {
    if (forSlider) {
      dispatch(getSortedProductByID(productsToRender));
      navigate(`/product/${productsToRender.id}`);
    } else {
      dispatch(getSelectedProductId(e.target.closest("img").id));
      dispatch(getSortedProductsRequested());
      navigate(`/product/${e.target.closest("img").id}`);
    }
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
    } else if (forSlider) {
      if (productsToRender.id === e.target.closest("svg").id) {
        dispatch(
          getProductToFavorites({
            productId: productsToRender?.id,
            productImg: productsToRender?.images[0],
            productName: productsToRender?.name,
            productColor: productsToRender?.color.name,
            productSizeList: productsToRender?.availableSizes,
            productPrice: {
              currency: productsToRender?.price.currency,
              value: productsToRender?.price.value,
              totalPrice: productsToRender?.price.value,
            },
            productQuantity: 1,
            selectedSize: productsToRender?.availableSizes[0].split(", ")[0],
          })
        );
      }
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
      {forSlider ? (
        <StyleSliderCard key={productsToRender.id} id={productsToRender.id}>
          <SliderImgContainer role="presentation">
            <SliderImg
              id={productsToRender.id}
              src={productsToRender.images[0]}
              alt={productsToRender.name}
              onClick={handleNavigate}
            />
            <FontAwesomeIcon
              className={
                productToFavoritesSelector.find(
                  ({ productId }) => productId === productsToRender.id
                )
                  ? "full_heart"
                  : "empty_heart"
              }
              id={productsToRender.id}
              icon={
                productToFavoritesSelector.find(
                  ({ productId }) => productId === productsToRender.id
                )
                  ? fullHeart
                  : faHeart
              }
              onClick={handleProductToFavoritesClick}
            />
            <SaleAmount>{productsToRender.price.saleAmount}</SaleAmount>
          </SliderImgContainer>
          <PriceContainer>
            <FullPrice>{`${productsToRender.price.currency} ${productsToRender.price.fullPrice}`}</FullPrice>
            <TotalPrice>{`${productsToRender.price.currency} ${productsToRender.price.value}`}</TotalPrice>
          </PriceContainer>
        </StyleSliderCard>
      ) : (
        productsToRender.map((product) => (
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
        ))
      )}
    </>
  );
}

ProductCard.propTypes = {
  productsToRender: PropTypes.oneOfType([
    PropTypes.arrayOf(
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
    }),
  ]),
  forSlider: PropTypes.bool,
};
export default ProductCard;
