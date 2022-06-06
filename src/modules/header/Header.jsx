import React, { useContext, useEffect, useState } from "react";
import {
  faSearch,
  faUserCheck,
  faUserXmark,
  faBagShopping,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
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

function Header({ headerColor }) {
  const { userAuthData, setUserAuthData } = useContext(UserAuthContext);
  const [burgerMenu, setBurgerMenu] = useState(false);
  const windowWidth = useWindowSize().sizeWidth;
  useEffect(() => {
    if (windowWidth > 850) {
      setBurgerMenu(false);
    }
  }, [windowWidth]);
  return (
    <StyleHeader headerColor={headerColor}>
      {" "}
      <AdaptiveIcons onClick={() => setBurgerMenu(!burgerMenu)}>
        <FontAwesomeIcon icon={burgerMenu ? faXmark : faBars} />
      </AdaptiveIcons>
      <NavMenu adaptiveNavMenu={windowWidth <= 850} burgerMenu={burgerMenu}>
        <Link to="/">{NavMenuNewArrivals}</Link>
        <Link to="/">{NavMenuShop}</Link>
        <Link to="/">{NavMenuCollections}</Link>
      </NavMenu>
      <Logo />
      <NavMenu adaptiveNavMenu={windowWidth <= 850}>
        <Link to="/">
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

        <Link to="/">{NavMenuBag}</Link>
        <span>
          <FontAwesomeIcon icon={faHeart} />
        </span>
      </NavMenu>
      <AdaptiveIcons>
        <FontAwesomeIcon icon={faSearch} />
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
        <FontAwesomeIcon icon={faBagShopping} />
        <FontAwesomeIcon icon={faHeart} />
      </AdaptiveIcons>
    </StyleHeader>
  );
}

Header.propTypes = {
  headerColor: PropTypes.string.isRequired,
};
export default Header;
