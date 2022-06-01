import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  faSearch,
  faBagShopping,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import Logo from "../../components/logo/Logo";
import NavMenu from "../../components/navMenu/NavMenu";
import {
  NavMenuBag,
  NavMenuCollections,
  NavMenuNewArrivals,
  NavMenuSearch,
  NavMenuShop,
  NavMenuSignIn,
} from "../../configs/stringData";
import useWindowSize from "../../hooks/useWindowSize";

const StyleHeader = styled.header`
  position: absolute;
  left: 0;
  right: 0;
  z-index: 5;
  height: min-content;
  max-width: 100vw;
  padding: calc(var(--index) * 0.878) calc(var(--index) * 2.634);
  color: ${(props) => props.headerColor};
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  align-items: end;
  @media screen and (max-width: 851px) {
    padding: calc(var(--index) * 0.74) calc(var(--index) * 0.44);
    text-align: center;
  }
`;
const AdaptiveIcons = styled.nav`
  display: none;
  @media screen and (max-width: 851px) {
    display: block;
    & svg {
      height: calc(var(--index) * 0.85);
      width: calc(var(--index) * 0.85);
    }

    & svg:not(:first-child) {
      margin-left: calc(var(--index) * 0.878);
    }
  }
`;

function Header({ headerColor }) {
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
      {/* Заменить <p> на <Link to=''> */}
      <AdaptiveIcons onClick={() => setBurgerMenu(!burgerMenu)}>
        <FontAwesomeIcon icon={burgerMenu ? faXmark : faBars} />
      </AdaptiveIcons>
      <NavMenu adaptiveNavMenu={windowWidth <= 850} burgerMenu={burgerMenu}>
        <p>{NavMenuNewArrivals}</p>
        <p>{NavMenuShop}</p>
        <p>{NavMenuCollections}</p>
      </NavMenu>
      <Logo />
      <NavMenu adaptiveNavMenu={windowWidth <= 850}>
        <p>
          <span>
            <FontAwesomeIcon icon={faSearch} />
          </span>
          {NavMenuSearch}
        </p>
        <p>{NavMenuSignIn}</p>
        <p>{NavMenuBag}</p>
        <span>
          <FontAwesomeIcon icon={faHeart} />
        </span>
      </NavMenu>
      <AdaptiveIcons>
        <FontAwesomeIcon icon={faSearch} />
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
