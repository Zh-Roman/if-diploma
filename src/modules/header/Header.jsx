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
import RefForScrollContext from "../../context/refForScrollContext";

function Header({ headerColor }) {
  const { userAuthData, setUserAuthData } = useContext(UserAuthContext);
  const { setRefForShopSection, setRefForSaleSection, setRefForSearchSection } =
    useContext(RefForScrollContext);
  const productsInBagSelector = useSelector(productsToBagSelector).products;
  const orderRequestResult = useSelector(orderRequestResultSelector);
  const [productsInBagValue, setProductsInBagValue] = useState([]);
  const [burgerMenu, setBurgerMenu] = useState(false);
  const windowWidth = useWindowSize().sizeWidth;
  const dispatch = useDispatch();
  const productToFavoritesSelector = useSelector(productsToFavoritesSelector);
  const windowWidthValue = 850;
  useEffect(() => {
    if (windowWidth > windowWidthValue) {
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
        adaptiveNavMenu={windowWidth <= windowWidthValue}
        burgerMenu={burgerMenu}
        setBurgerMenu={setBurgerMenu}
      >
        <Link to="/new_arrival">{NavMenuNewArrivals}</Link>
        <Link to="/" onClick={() => setRefForShopSection(true)}>
          {NavMenuShop}
        </Link>
        <Link to="/" onClick={() => setRefForSaleSection(true)}>
          {NavMenuCollections}
        </Link>
      </NavMenu>
      <Logo />
      <NavMenu adaptiveNavMenu={windowWidth <= windowWidthValue}>
        <Link to="/" onClick={() => setRefForSearchSection(true)}>
          <span>
            <FontAwesomeIcon icon={faSearch} />
          </span>
          {NavMenuSearch}
        </Link>
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
        <Link to="/">
          <FontAwesomeIcon
            onClick={() => setRefForSearchSection(true)}
            icon={faSearch}
          />
        </Link>
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
};
export default Header;
