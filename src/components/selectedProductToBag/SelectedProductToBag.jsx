import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  faAngleDown,
  faXmark,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import shortid from "shortid";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  AddingToBag,
  ColorText,
  QuantityText,
  RemoveText,
  SizeText,
} from "../../configs/stringData";

import {
  deleteProductFromBag,
  getProductToBag,
} from "../../ducks/productsToBag/actions";
import { deleteProductFromFavorites } from "../../ducks/productsToFavorites/actions";
import { productsToBagSelector } from "../../ducks/productsToBag/selectors";
import {
  SelectedProductToBagStyle,
  ProductToBagSection,
  ProductRemoveSectionIconSection,
  AngleDownIcon,
  ProductRemoveSection,
  ProductToBagColor,
  ProductToBagImageContainer,
  ProductToBagPrice,
  RemoveSectionTitle,
  ProductToBagQuantity,
  ProductToBagSize,
  ProductToBagName,
  ProductToBagSizeContainer,
  ProductToBagInfoSection,
  SelectedOption,
  ProductToBagQuantityContainer,
  ProductToBagImage,
  ProductNavigationSection,
} from "./StyleSelectedProductToBag";
import { productsToFavoritesSelector } from "../../ducks/productsToFavorites/selectors";

function SelectedProductToBag({
  item,
  itemsToBag,
  setItemsToBag,
  setDeleteLastItem,
  storageName,
}) {
  const productToBagSelector = useSelector(productsToBagSelector).products;
  const productToFavoritesSelector = useSelector(productsToFavoritesSelector);
  const quantityArray = [1, 2, 3, 4, 5];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sizeArray = item.productSizeList[0].split(", ");
  const [productSize, setProductSize] = useState(item.selectedSize);
  const [productSizeSelectorShow, setProductSizeSelectorShow] = useState(false);
  const [productQuantity, setProductQuantity] = useState(
    Number(item.productQuantity)
  );
  const [productQuantitySelectorShow, setProductQuantitySelectorShow] =
    useState(false);
  const handleQuantityValue = (e) => {
    setProductQuantity(e.target.id);
    setProductQuantitySelectorShow(false);
    const changedItems = [...itemsToBag];
    const itemIndex = itemsToBag.findIndex(
      (elem) => elem.productId === item.productId
    );
    changedItems[itemIndex].productQuantity = e.target.id;
    changedItems[itemIndex].productPrice.totalPrice = Number(
      e.target.id * changedItems[itemIndex].productPrice.value
    );
    setItemsToBag(changedItems);
  };
  const handleSizeValue = (e) => {
    setProductSize(e.target.id);
    setProductSizeSelectorShow(false);
    const changedItems = [...itemsToBag];
    const itemIndex = itemsToBag.findIndex(
      (elem) => elem.productId === item.productId
    );
    changedItems[itemIndex].selectedSize = e.target.id;
    setItemsToBag(changedItems);
  };

  const handleRemove = () => {
    if (storageName === "favoritesStorage") {
      dispatch(deleteProductFromFavorites(item));
      if (productToFavoritesSelector.length === 1) {
        setDeleteLastItem(true);
      }
    } else {
      dispatch(deleteProductFromBag(item));
      if (productToBagSelector.length === 1) {
        setDeleteLastItem(true);
      }
    }
  };
  const handleAddToBag = () => {
    dispatch(deleteProductFromFavorites(item));
    if (productToFavoritesSelector.length === 1) {
      localStorage.setItem("favoritesStorage", JSON.stringify([]));
    }
    let checkProductData = true;
    productToBagSelector.forEach((productToCheck) => {
      if (productToCheck.productId === item.productId) {
        checkProductData = false;
      }
    });
    if (checkProductData) {
      dispatch(getProductToBag(item));
      navigate("/bag");
    } else {
      navigate("/bag");
    }
  };
  return (
    <SelectedProductToBagStyle>
      <ProductToBagSection>
        <ProductToBagImageContainer>
          <ProductToBagImage src={item.productImg} alt={item.productName} />
        </ProductToBagImageContainer>
        <ProductToBagInfoSection>
          <ProductToBagName>{item.productName}</ProductToBagName>
          <ProductToBagPrice>{`${item.productPrice.currency} ${item.productPrice.totalPrice}`}</ProductToBagPrice>
          <ProductToBagColor>{`${ColorText.toUpperCase()} : ${item.productColor.toUpperCase()}`}</ProductToBagColor>
          <ProductToBagSizeContainer>
            <ProductToBagSize>
              {`${SizeText.toUpperCase()} : `}
              <div>
                {productSizeSelectorShow
                  ? sizeArray.map((size) => (
                      <SelectedOption
                        key={shortid.generate()}
                        id={`${size}`}
                        role="presentation"
                        onClick={handleSizeValue}
                      >
                        {size}
                      </SelectedOption>
                    ))
                  : productSize}
              </div>
            </ProductToBagSize>
            {productSizeSelectorShow ? null : (
              <AngleDownIcon
                role="presentation"
                onClick={() => setProductSizeSelectorShow(true)}
              >
                <FontAwesomeIcon icon={faAngleDown} />
              </AngleDownIcon>
            )}
          </ProductToBagSizeContainer>
          <ProductToBagQuantityContainer>
            <ProductToBagQuantity>
              {`${QuantityText.toUpperCase()} : `}
              <div>
                {productQuantitySelectorShow
                  ? quantityArray.map((quantity) => (
                      <SelectedOption
                        key={shortid.generate()}
                        id={`${quantity}`}
                        role="presentation"
                        onClick={handleQuantityValue}
                      >
                        {quantity}
                      </SelectedOption>
                    ))
                  : productQuantity}
              </div>
            </ProductToBagQuantity>
            {productQuantitySelectorShow ? null : (
              <AngleDownIcon
                role="presentation"
                onClick={() => setProductQuantitySelectorShow(true)}
              >
                <FontAwesomeIcon icon={faAngleDown} />
              </AngleDownIcon>
            )}
          </ProductToBagQuantityContainer>
        </ProductToBagInfoSection>
      </ProductToBagSection>
      <ProductNavigationSection
        justifyСontent={
          storageName === "favoritesStorage" ? "space-between" : "end"
        }
      >
        {storageName === "favoritesStorage" && (
          <ProductRemoveSection onClick={handleAddToBag}>
            <ProductRemoveSectionIconSection>
              <FontAwesomeIcon icon={faBagShopping} />
            </ProductRemoveSectionIconSection>
            <RemoveSectionTitle>{AddingToBag}</RemoveSectionTitle>
          </ProductRemoveSection>
        )}

        <ProductRemoveSection onClick={handleRemove}>
          <ProductRemoveSectionIconSection>
            <FontAwesomeIcon icon={faXmark} />
          </ProductRemoveSectionIconSection>
          <RemoveSectionTitle>{RemoveText}</RemoveSectionTitle>
        </ProductRemoveSection>
      </ProductNavigationSection>
    </SelectedProductToBagStyle>
  );
}

SelectedProductToBag.propTypes = {
  item: PropTypes.shape({
    productId: PropTypes.string,
    productImg: PropTypes.string,
    productName: PropTypes.string,
    productPrice: PropTypes.shape({
      currency: PropTypes.string,
      value: PropTypes.string,
      totalPrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
    productColor: PropTypes.string,
    productSizeList: PropTypes.arrayOf(PropTypes.string),
    productQuantity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    selectedSize: PropTypes.string,
  }),
  itemsToBag: PropTypes.arrayOf(
    PropTypes.shape({
      productId: PropTypes.string,
      productImg: PropTypes.string,
      productName: PropTypes.string,
      productPrice: PropTypes.shape({
        currency: PropTypes.string,
        value: PropTypes.string,
        totalPrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      }),
      productColor: PropTypes.string,
      productSizeList: PropTypes.arrayOf(PropTypes.string),
      productQuantity: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
      selectedSize: PropTypes.string,
    })
  ),
  setItemsToBag: PropTypes.func,
  setDeleteLastItem: PropTypes.func,
  storageName: PropTypes.string,
};
export default SelectedProductToBag;
