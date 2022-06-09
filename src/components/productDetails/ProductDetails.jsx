import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import {
  StyleProductDetails,
  DetailsSection,
  DetailsTitle,
  DetailsBody,
} from "./StyleProductDetails";

function ProductDetails({ detailTitle, detailBody }) {
  const [infoSectionOpen, setInfoSectionOpen] = useState(false);
  return (
    <StyleProductDetails
      role="presentation"
      onClick={() => setInfoSectionOpen(!infoSectionOpen)}
    >
      <FontAwesomeIcon icon={infoSectionOpen ? faMinus : faPlus} />
      <DetailsSection>
        <DetailsTitle>{detailTitle}</DetailsTitle>
        {infoSectionOpen && <DetailsBody>{detailBody}</DetailsBody>}
      </DetailsSection>
    </StyleProductDetails>
  );
}

ProductDetails.propTypes = {
  detailTitle: PropTypes.string.isRequired,
  detailBody: PropTypes.string.isRequired,
};
export default ProductDetails;
