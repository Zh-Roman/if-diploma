import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import ProductCard from "../../components/productCard/ProductCard";
import { SortedSectionButtonText } from "../../configs/stringData";
import { StyleTopSectionButton } from "../../components/topSection/TopSectionButton";
import {
  SortedProductsSectionStyle,
  SortedProductsBody,
} from "./StyleSortedProductsSection";

let productsPerView = 4;
if (window.innerWidth <= 912 && window.innerHeight > 539) {
  productsPerView = 2;
} else if (window.innerWidth <= 1180 || window.innerHeight < 539) {
  productsPerView = 3;
}
let arrayForHoldingProducts = [];

function SortedProductsSection({ filterValueTitle, sortedProductsData }) {
  const executeScrollToData = (ref) =>
    ref.current?.scrollIntoView({ block: "start", behavior: "smooth" });
  const refForSortedProductsSection = useRef(null);
  const [productsToShow, setProductsToShow] = useState([]);
  const [next, setNext] = useState(productsPerView);
  const loopWithSlice = (start, end) => {
    const slicedPosts = sortedProductsData.slice(start, end);
    arrayForHoldingProducts = [...arrayForHoldingProducts, ...slicedPosts];
    setProductsToShow(arrayForHoldingProducts);
  };
  useEffect(() => {
    executeScrollToData(refForSortedProductsSection);
    arrayForHoldingProducts = [];
    setProductsToShow([]);
    setNext(productsPerView);
    loopWithSlice(0, productsPerView);
  }, [sortedProductsData]);

  const handleShowMoreProducts = () => {
    loopWithSlice(next, next + productsPerView);
    setNext(next + productsPerView);
  };
  return (
    <SortedProductsSectionStyle
      className="_container"
      ref={refForSortedProductsSection}
    >
      <SectionTitle>
        <span>{filterValueTitle}</span>
      </SectionTitle>
      <SortedProductsBody>
        <ProductCard productsToRender={productsToShow} />
      </SortedProductsBody>
      {arrayForHoldingProducts.length === sortedProductsData.length ? null : (
        <StyleTopSectionButton type="button" onClick={handleShowMoreProducts}>
          {SortedSectionButtonText}
        </StyleTopSectionButton>
      )}
    </SortedProductsSectionStyle>
  );
}

SortedProductsSection.propTypes = {
  sortedProductsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.shape({
        currency: PropTypes.string,
        value: PropTypes.string,
      }),
      color: PropTypes.shape({
        name: PropTypes.string,
        hex: PropTypes.string,
      }),
      availableSizes: PropTypes.arrayOf(PropTypes.string),
      description: PropTypes.string,
      images: PropTypes.arrayOf(PropTypes.string),
    })
  ),
  filterValueTitle: PropTypes.string,
};
export default SortedProductsSection;
