import React from "react";
import styled from "styled-components";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
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

const StyleHeader = styled.header`
  position: absolute;
  left: 0;
  right: 0;
  z-index: 5;
  height: min-content;
  width: 100vw;
  padding: calc(var(--index) * 0.878) calc(var(--index) * 2.634);
  color: ${(props) => props.headerColor};
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

function Header({ headerColor }) {
  return (
    <StyleHeader headerColor={headerColor}>
      {" "}
      {/* Заменить <p> на <Link to=''> */}
      <NavMenu>
        <p>{NavMenuNewArrivals}</p>
        <p>{NavMenuShop}</p>
        <p>{NavMenuCollections}</p>
      </NavMenu>
      <Logo />
      <NavMenu>
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
    </StyleHeader>
  );
}

Header.propTypes = {
  headerColor: PropTypes.string.isRequired,
};
export default Header;
