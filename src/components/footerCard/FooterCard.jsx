import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { FooterCardTitle, StyleFooterCard } from "./StyleFooterCard";

function FooterCard(props) {
  const { footerCardTitle, children } = props;
  const [footerCardDetails, setFooterCardDetails] = useState(false);
  return (
    <StyleFooterCard footerCardDetails={footerCardDetails}>
      <FooterCardTitle onClick={() => setFooterCardDetails(!footerCardDetails)}>
        <FontAwesomeIcon icon={footerCardDetails ? faMinus : faPlus} />
        {footerCardTitle}
      </FooterCardTitle>
      {children}
    </StyleFooterCard>
  );
}

FooterCard.propTypes = {
  footerCardTitle: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
};
export default FooterCard;
