import React from "react";
import PropTypes from "prop-types";
import ClickAwayListener from "react-click-away-listener";
import { StyleNavMenu, AdaptiveNavMenu } from "./StyleNavMenu";

function NavMenu({ children, adaptiveNavMenu, burgerMenu, setBurgerMenu }) {
  return (
    <>
      <StyleNavMenu adaptiveNavMenu={adaptiveNavMenu}>{children}</StyleNavMenu>
      {burgerMenu && (
        <ClickAwayListener onClickAway={() => setBurgerMenu(false)}>
          <AdaptiveNavMenu> {children}</AdaptiveNavMenu>
        </ClickAwayListener>
      )}
    </>
  );
}

NavMenu.propTypes = {
  adaptiveNavMenu: PropTypes.bool,
  burgerMenu: PropTypes.bool,
  setBurgerMenu: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
};
export default NavMenu;
