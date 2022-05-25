import React from "react";
import styled from "styled-components";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import {
  SectionTitleShopText,
  SectionTitleCategoryText,
  CategoryDresses,
  CategoryTees,
  CategoryBeauty,
  CategorySwimwear,
  CategoryDenim,
  CategoryTops,
} from "../../configs/stringData";
import CategoryCard from "../../components/categoryCard/CategoryCard";

const StyleCategorySection = styled.section`
  color: var(--main-black);
`;

const CategoryCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: calc(var(--index) * 0.55);
`;

function CategorySection() {
  return (
    <StyleCategorySection className="_container">
      <SectionTitle>
        {SectionTitleShopText}
        <span>{SectionTitleCategoryText}</span>
      </SectionTitle>
      <CategoryCardContainer>
        <CategoryCard svgId="dress" categoryTitle={CategoryDresses} />
        <CategoryCard svgId="tees" categoryTitle={CategoryTees} />
        <CategoryCard svgId="swimwear" categoryTitle={CategorySwimwear} />
        <CategoryCard svgId="denim" categoryTitle={CategoryDenim} />
        <CategoryCard svgId="tops" categoryTitle={CategoryTops} />
        <CategoryCard svgId="beauty" categoryTitle={CategoryBeauty} />
      </CategoryCardContainer>
    </StyleCategorySection>
  );
}

export default CategorySection;
