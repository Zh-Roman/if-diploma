import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyleSectionTitle = styled.h3`
  margin-bottom: calc(var(--index) * 3.64);
  text-align: center;
  font-weight: 400;
  font-size: calc(var(--index) * 1.49);
  line-height: calc(var(--index) * 1.756);

  & span {
    font-weight: 700;
  }

  @media screen and (max-width: 851px) and (min-height: 541px) {
    font-size: calc(var(--index) * 1.4);
    margin-bottom: calc(var(--index) * 1.756);
    margin-top: calc(var(--index) * -1.756);
  }
`;

function SectionTitle({ children }) {
  return <StyleSectionTitle>{children}</StyleSectionTitle>;
}

SectionTitle.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
};
export default SectionTitle;
