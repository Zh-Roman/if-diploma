import React, { useContext, useEffect, useState } from "react";
import {
  faSearch,
  faUserCheck,
  faUserXmark,
  faBagShopping,
  faBars,
  faXmark,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as emptyHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../../components/logo/Logo";
import NavMenu from "../../components/navMenu/NavMenu";
import {
  NavMenuBag,
  NavMenuCollections,
  NavMenuNewArrivals,
  NavMenuSearch,
  NavMenuShop,
  NavMenuSignIn,
  NavMenuSignOut,
} from "../../configs/stringData";
import useWindowSize from "../../hooks/useWindowSize";
import UserAuthContext from "../../context/UserAuthContext";
import { AdaptiveIcons, SignOutSection, StyleHeader } from "./StyleHeader";
import { productsToBagSelector } from "../../ducks/productsToBag/selectors";
import { orderRequestResultSelector } from "../../ducks/orderRequest/selectors";
import { sendOrderFromBagSucceeded } from "../../ducks/orderRequest/actions";
import { productsToFavoritesSelector } from "../../ducks/productsToFavorites/selectors";

export const SearchModuleStyle = styled.div`
  cursor: pointer;
`;

function Header({ headerColor, setShowSearchSection }) {
  const { userAuthData, setUserAuthData } = useContext(UserAuthContext);
  const productsInBagSelector = useSelector(productsToBagSelector).products;
  const orderRequestResult = useSelector(orderRequestResultSelector);
  const [productsInBagValue, setProductsInBagValue] = useState([]);
  const [burgerMenu, setBurgerMenu] = useState(false);
  const windowWidth = useWindowSize().sizeWidth;
  const dispatch = useDispatch();
  const productToFavoritesSelector = useSelector(productsToFavoritesSelector);

  useEffect(() => {
    if (windowWidth > 850) {
      setBurgerMenu(false);
    }
  }, [windowWidth]);
  useEffect(() => {
    if (
      productsInBagSelector.length === 0 &&
      JSON.parse(localStorage.getItem("bagStorage")).length !== 0
    ) {
      setProductsInBagValue(JSON.parse(localStorage.getItem("bagStorage")));
    } else {
      setProductsInBagValue(productsInBagSelector);
    }
  }, [productsInBagSelector]);
  return (
    <StyleHeader headerColor={headerColor}>
      {" "}
      <AdaptiveIcons onClick={() => setBurgerMenu(!burgerMenu)}>
        <FontAwesomeIcon icon={burgerMenu ? faXmark : faBars} />
      </AdaptiveIcons>
      <NavMenu
        adaptiveNavMenu={windowWidth <= 850}
        burgerMenu={burgerMenu}
        setBurgerMenu={setBurgerMenu}
      >
        <Link to="/">{NavMenuNewArrivals}</Link>
        <Link to="/">{NavMenuShop}</Link>
        <Link to="/">{NavMenuCollections}</Link>
      </NavMenu>
      <Logo />
      <NavMenu adaptiveNavMenu={windowWidth <= 850}>
        <SearchModuleStyle onClick={() => setShowSearchSection(true)}>
          <span>
            <FontAwesomeIcon icon={faSearch} />
          </span>
          {NavMenuSearch}
        </SearchModuleStyle>
        {!userAuthData ? (
          <Link to="/login">{NavMenuSignIn}</Link>
        ) : (
          <SignOutSection
            role="presentation"
            onClick={() => setUserAuthData("")}
          >
            {NavMenuSignOut}
          </SignOutSection>
        )}

        <Link
          to="/bag"
          onClick={() => dispatch(sendOrderFromBagSucceeded(null))}
        >
          {NavMenuBag}
          {orderRequestResult
            ? null
            : productsInBagValue.length !== 0
            ? ` (${productsInBagValue.length})`
            : null}
        </Link>
        <Link to="/favorites">
          <FontAwesomeIcon
            className={
              productToFavoritesSelector.length === 0 ? "" : "favorites_icon"
            }
            icon={
              productToFavoritesSelector.length === 0 ? emptyHeart : faHeart
            }
          />
        </Link>
      </NavMenu>
      <AdaptiveIcons>
        <FontAwesomeIcon
          onClick={() => setShowSearchSection(true)}
          icon={faSearch}
        />
        {!userAuthData ? (
          <Link to="/login">
            <FontAwesomeIcon icon={faUserXmark} />
          </Link>
        ) : (
          <SignOutSection
            role="presentation"
            onClick={() => setUserAuthData("")}
          >
            <FontAwesomeIcon icon={faUserCheck} />
          </SignOutSection>
        )}
        <Link to="/bag">
          <FontAwesomeIcon icon={faBagShopping} />
        </Link>
        <Link to="/favorites">
          <FontAwesomeIcon
            className={
              productToFavoritesSelector.length === 0 ? "" : "favorites_icon"
            }
            icon={
              productToFavoritesSelector.length === 0 ? emptyHeart : faHeart
            }
          />
        </Link>
      </AdaptiveIcons>
    </StyleHeader>
  );
}

Header.propTypes = {
  headerColor: PropTypes.string.isRequired,
  setShowSearchSection: PropTypes.func,
};
export default Header;
