import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import shortid from "shortid";
import {
  CheckoutText,
  EmptyBag,
  ItemsText,
  ItemText,
  NavMenuBag,
  TotalUSDText,
} from "../../configs/stringData";
import SelectedProductToBag from "../../components/selectedProductToBag/SelectedProductToBag";
import { productsToBagSelector } from "../../ducks/productsToBag/selectors";
import {
  deleteAllProductsFromBag,
  getProductToBag,
} from "../../ducks/productsToBag/actions";
import { MainButtonStyle } from "../../components/userAuth/StyleUserAuth";
import SpriteSVG from "../../components/spriteSVG/SpriteSVG";
import {
  getOrderingProductsID,
  sendOrderFromBagRequested,
} from "../../ducks/orderRequest/actions";
import { orderRequestResultSelector } from "../../ducks/orderRequest/selectors";
import {
  BagSectionStyle,
  BagTitleSection,
  BagTitle,
  BagItemsAmount,
  TotalPriceContainer,
  BankCardTypeIconsContainer,
} from "./StyleBagSection";

function BagSection() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [productsAmount, setProductsAmount] = useState(0);
  const [itemsToBag, setItemsToBag] = useState([]);
  const [itemsToShow, setItemsToShow] = useState([]);
  const [deleteLastItem, setDeleteLastItem] = useState(false);
  const [completeOrder, setCompleteOrder] = useState(false);
  const productToBagSelector = useSelector(productsToBagSelector).products;
  const orderRequestResult = useSelector(orderRequestResultSelector);
  const dispatch = useDispatch();
  if (localStorage.getItem("bagStorage") === null) {
    localStorage.setItem("bagStorage", JSON.stringify([]));
  }
  useEffect(() => {
    if (orderRequestResult) {
      setCompleteOrder(true);
    }
  }, [orderRequestResult]);
  useEffect(() => {
    if (
      productToBagSelector?.length === 0 &&
      itemsToBag.length === 0 &&
      localStorage.getItem("bagStorage") !== null
    ) {
      const productsFromBagStorage = JSON.parse(
        localStorage.getItem("bagStorage")
      );
      productsFromBagStorage.forEach((elem) => {
        dispatch(getProductToBag(elem));
      });
    }
    setProductsAmount(productToBagSelector?.length);
    productToBagSelector.forEach((elem) => {
      if (itemsToBag.length !== 0) {
        if (itemsToBag.length > productToBagSelector.length) {
          setItemsToBag([]);
        }
        const checkingStorage = itemsToBag.find(
          ({ productId }) => productId === elem.productId
        );
        if (!checkingStorage) {
          setItemsToBag([...itemsToBag, elem]);
        }
        localStorage.setItem("bagStorage", JSON.stringify(itemsToBag));
      } else {
        setItemsToBag([elem]);
        localStorage.setItem("bagStorage", JSON.stringify(itemsToBag));
      }
    });
    if (productToBagSelector.length === 0 && itemsToBag.length !== 0) {
      setItemsToBag([]);
      localStorage.setItem("bagStorage", JSON.stringify(itemsToBag));
    }
    setItemsToShow(JSON.parse(localStorage.getItem("bagStorage")));
  }, [productToBagSelector, itemsToBag]);

  useEffect(() => {
    if (deleteLastItem) {
      localStorage.setItem("bagStorage", JSON.stringify([]));
    }
    setItemsToShow(JSON.parse(localStorage.getItem("bagStorage")));
  }, [deleteLastItem]);
  useEffect(() => {
    const totalPriceArr = itemsToShow.map((elem) =>
      Number(elem.productPrice.totalPrice)
    );
    const totalPriceValue = totalPriceArr.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
    setTotalPrice(totalPriceValue);
    const arrayOfID = itemsToShow.map((product) => product.productId);
    dispatch(
      getOrderingProductsID({
        products: arrayOfID,
      })
    );
  }, [itemsToShow]);
  const handleOrderRequestClick = () => {
    dispatch(sendOrderFromBagRequested());
    localStorage.removeItem("bagStorage");
    setItemsToShow([]);
    setItemsToBag([]);
    dispatch(deleteAllProductsFromBag());
  };
  return (
    <>
      {completeOrder ? (
        <BagSectionStyle>
          <BagTitleSection>
            <p>{`${orderRequestResult?.message.toUpperCase()}`}</p>
          </BagTitleSection>
        </BagSectionStyle>
      ) : (
        <BagSectionStyle>
          <BagTitleSection>
            {productsAmount === 0 ? (
              <p>{`${EmptyBag.toUpperCase()}`}</p>
            ) : (
              <BagTitle>{NavMenuBag.toUpperCase()}</BagTitle>
            )}

            <BagItemsAmount>
              {productsAmount === 0
                ? null
                : productsAmount === 1
                ? ItemText
                : `${productsAmount} ${ItemsText}`}
            </BagItemsAmount>
          </BagTitleSection>
          {itemsToShow.map((item) => (
            <SelectedProductToBag
              key={shortid.generate()}
              id={item.id}
              item={item}
              itemsToBag={itemsToBag}
              setItemsToBag={setItemsToBag}
              setDeleteLastItem={setDeleteLastItem}
            />
          ))}
          {productsAmount !== 0 && (
            <>
              <TotalPriceContainer>
                <div>{TotalUSDText}</div>
                <div>{totalPrice}</div>
              </TotalPriceContainer>
              <MainButtonStyle onClick={handleOrderRequestClick}>
                {CheckoutText}
              </MainButtonStyle>
              <BankCardTypeIconsContainer>
                <SpriteSVG name="maestro" className="bank_card_type_icon" />
                <SpriteSVG name="visa" className="bank_card_type_icon" />
              </BankCardTypeIconsContainer>
            </>
          )}
        </BagSectionStyle>
      )}
    </>
  );
}

export default BagSection;
