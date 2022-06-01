import React from "react";
import PropTypes from "prop-types";
import { StyleNavMenu, AdaptiveNavMenu } from "./StyleNavMenu";

function NavMenu({ children, adaptiveNavMenu, burgerMenu }) {
  return (
    <>
      <StyleNavMenu adaptiveNavMenu={adaptiveNavMenu}>{children}</StyleNavMenu>
      {burgerMenu && <AdaptiveNavMenu>{children}</AdaptiveNavMenu>}
    </>
  );
}

NavMenu.propTypes = {
  adaptiveNavMenu: PropTypes.bool,
  burgerMenu: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
};
export default NavMenu;
