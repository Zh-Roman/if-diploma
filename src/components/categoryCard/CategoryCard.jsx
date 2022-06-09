import React from "react";
import PropTypes from "prop-types";
import SpriteSVG from "../spriteSVG/SpriteSVG";
import {
  CategoryIcon,
  StyleCategoryCard,
  CategoryTitle,
} from "./StyleCategoryCard";

function CategoryCard({ svgId, categoryTitle }) {
  return (
    <StyleCategoryCard>
      <CategoryIcon>
        <SpriteSVG name={svgId} className="category_icon" />
      </CategoryIcon>
      <CategoryTitle>{categoryTitle}</CategoryTitle>
    </StyleCategoryCard>
  );
}

CategoryCard.propTypes = {
  svgId: PropTypes.string.isRequired,
  categoryTitle: PropTypes.string.isRequired,
};
export default CategoryCard;
