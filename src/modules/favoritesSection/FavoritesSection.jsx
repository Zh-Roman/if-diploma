import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import shortid from "shortid";
import {
  EmptyFavorites,
  ItemsText,
  ItemText,
  NavMenuFavorites,
} from "../../configs/stringData";
import SelectedProductToBag from "../../components/selectedProductToBag/SelectedProductToBag";
import {
  BagSectionStyle,
  BagTitleSection,
  BagTitle,
  BagItemsAmount,
} from "../bagSection/StyleBagSection";
import { productsToFavoritesSelector } from "../../ducks/productsToFavorites/selectors";
import { getProductToFavorites } from "../../ducks/productsToFavorites/actions";

function FavoritesSection() {
  const [productsAmount, setProductsAmount] = useState(0);
  const [itemsToFavorites, setItemsToFavorites] = useState([]);
  const [itemsToShow, setItemsToShow] = useState([]);
  const [deleteLastItem, setDeleteLastItem] = useState(false);
  const productToFavoritesSelector = useSelector(productsToFavoritesSelector);
  const dispatch = useDispatch();

  if (localStorage.getItem("favoritesStorage") === null) {
    localStorage.setItem("favoritesStorage", JSON.stringify([]));
  }

  useEffect(() => {
    if (
      productToFavoritesSelector?.length === 0 &&
      itemsToFavorites.length === 0 &&
      localStorage.getItem("favoritesStorage") !== null
    ) {
      const productsFromFavoritesStorage = JSON.parse(
        localStorage.getItem("favoritesStorage")
      );
      productsFromFavoritesStorage.forEach((elem) => {
        dispatch(getProductToFavorites(elem));
      });
    }
    setProductsAmount(productToFavoritesSelector?.length);
    productToFavoritesSelector.forEach((elem) => {
      if (itemsToFavorites.length !== 0) {
        if (itemsToFavorites.length > productToFavoritesSelector.length) {
          setItemsToFavorites([]);
        }
        const checkingStorage = itemsToFavorites.find(
          ({ productId }) => productId === elem.productId
        );
        if (!checkingStorage) {
          setItemsToFavorites([...itemsToFavorites, elem]);
        }
        localStorage.setItem(
          "favoritesStorage",
          JSON.stringify(itemsToFavorites)
        );
      } else {
        setItemsToFavorites([elem]);
        localStorage.setItem(
          "favoritesStorage",
          JSON.stringify(itemsToFavorites)
        );
      }
    });
    if (
      productToFavoritesSelector.length === 0 &&
      itemsToFavorites.length !== 0
    ) {
      setItemsToFavorites([]);
      localStorage.setItem(
        "favoritesStorage",
        JSON.stringify(itemsToFavorites)
      );
    }
    setItemsToShow(JSON.parse(localStorage.getItem("favoritesStorage")));
  }, [productToFavoritesSelector, itemsToFavorites]);

  useEffect(() => {
    if (deleteLastItem) {
      localStorage.setItem("favoritesStorage", JSON.stringify([]));
    }
    setItemsToShow(JSON.parse(localStorage.getItem("favoritesStorage")));
  }, [deleteLastItem]);
  useEffect(() => {}, [itemsToShow]);
  return (
    <BagSectionStyle>
      <BagTitleSection>
        {productsAmount === 0 ? (
          <p>{`${EmptyFavorites.toUpperCase()}`}</p>
        ) : (
          <BagTitle>{NavMenuFavorites.toUpperCase()}</BagTitle>
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
          itemsToBag={itemsToFavorites}
          setItemsToBag={setItemsToFavorites}
          setDeleteLastItem={setDeleteLastItem}
          storageName="favoritesStorage"
        />
      ))}
    </BagSectionStyle>
  );
}

export default FavoritesSection;
