import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyleNavMenu = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: end;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-size: calc(var(--index) * 0.527);
  line-height: calc(var(--index) * 0.527);
  margin-bottom: calc(var(--index) * 0.22);
  & :not(:last-child) {
    margin-right: calc(var(--index) * 1.756);
  }
  & span:first-child {
    margin-right: calc(var(--index) * 0.22);
  }
`;

function NavMenu({ children }) {
  return <StyleNavMenu>{children}</StyleNavMenu>;
}

NavMenu.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
};
export default NavMenu;
