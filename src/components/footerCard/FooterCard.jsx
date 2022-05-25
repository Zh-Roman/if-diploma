import React from "react";
import PropTypes from "prop-types";
import { FooterCardTitle, StyleFooterCard } from "./StyleFooterCard";

function FooterCard(props) {
  const { footerCardTitle, children } = props;
  return (
    <StyleFooterCard>
      <FooterCardTitle>{footerCardTitle}</FooterCardTitle>
      {children}
    </StyleFooterCard>
  );
}

FooterCard.propTypes = {
  footerCardTitle: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
};
export default FooterCard;
