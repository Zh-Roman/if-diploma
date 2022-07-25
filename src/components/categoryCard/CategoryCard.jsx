import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import SpriteSVG from "../spriteSVG/SpriteSVG";
import {
  CategoryIcon,
  StyleCategoryCard,
  CategoryTitle,
} from "./StyleCategoryCard";
import { getFilterValue } from "../../ducks/productFilter/actions";
import { getSortedProductsRequested } from "../../ducks/sortedProducts/actions";

function CategoryCard({ svgId, categoryTitle }) {
  const dispatch = useDispatch();
  return (
    <StyleCategoryCard
      onClick={() => {
        dispatch(getFilterValue(categoryTitle));
        dispatch(getSortedProductsRequested());
      }}
    >
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
