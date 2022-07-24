import React, { useContext, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import TopSection from "../modules/topSection/TopSection";
import CategorySection from "../modules/categorySection/CategorySection";
import SaleSection from "../modules/saleSection/SaleSection";
import InstagramSection from "../modules/instagramSection/InstagramSection";
import Header from "../modules/header/Header";
import SortedProductsSection from "../modules/sortedProductsSection/SortedProductsSection";
import { sortedProductsDataSelector } from "../ducks/sortedProducts/selectors";
import {
  filterValueSelector,
  searchValueSelector,
} from "../ducks/productFilter/selectors";
import SectionTitle from "../components/sectionTitle/SectionTitle";
import SearchSection from "../modules/seacrhSection/SearchSection";
import { sortedSearchProductsDataSelector } from "../ducks/sortedSearchProducts/selectors";
import { SearchResults } from "../configs/stringData";
import RefForScrollContext from "../context/refForScrollContext";

export const HomepageStyle = styled.div`
  color: var(--main-black);
`;

function Homepage() {
  const {
    refForShopSection,
    refForSaleSection,
    setRefForShopSection,
    setRefForSaleSection,
    refForSearchSection,
    setRefForSearchSection,
  } = useContext(RefForScrollContext);
  const sortedProductsData = useSelector(sortedProductsDataSelector);
  const sortedSearchProductsData = useSelector(
    sortedSearchProductsDataSelector
  );
  const filterValue = useSelector(filterValueSelector);
  const searchValue = useSelector(searchValueSelector);
  const executeScrollToData = (ref) =>
    ref.current?.scrollIntoView({ block: "start", behavior: "smooth" });
  const refForSortedProductsSection = useRef(null);
  const refForSortedSearchProductsSection = useRef(null);
  const refForShopCategory = useRef(null);
  const refForSaleCategory = useRef(null);
  useEffect(() => {
    if (sortedProductsData && sortedProductsData.length === 0) {
      executeScrollToData(refForSortedProductsSection);
    }
  }, [sortedProductsData]);
  useEffect(() => {
    if (sortedSearchProductsData && sortedSearchProductsData.length === 0) {
      executeScrollToData(refForSortedSearchProductsSection);
      setRefForSearchSection(false);
    }
  }, [sortedSearchProductsData]);
  useEffect(() => {
    if (refForShopSection) {
      executeScrollToData(refForShopCategory);
      setRefForShopSection(false);
    }
    if (refForSaleSection) {
      executeScrollToData(refForSaleCategory);
      setRefForSaleSection(false);
    }
  }, [refForShopSection, refForSaleSection]);
  return (
    <HomepageStyle>
      {refForSearchSection && <SearchSection />}
      <Header headerColor="var(--main-white)" />
      <TopSection />
      {sortedSearchProductsData && sortedSearchProductsData.length > 0 ? (
        <SortedProductsSection
          sortedProductsData={sortedSearchProductsData}
          filterValueTitle={SearchResults}
        />
      ) : sortedSearchProductsData && sortedSearchProductsData.length === 0 ? (
        <SectionTitle
          className="_padding-top"
          ref={refForSortedSearchProductsSection}
        >
          <span>{`No "${searchValue}" products found`}</span>
        </SectionTitle>
      ) : null}
      <CategorySection />
      {sortedProductsData && sortedProductsData.length > 0 ? (
        <SortedProductsSection
          sortedProductsData={sortedProductsData}
          filterValueTitle={filterValue}
        />
      ) : sortedProductsData && sortedProductsData.length === 0 ? (
        <SectionTitle
          className="_padding-top"
          ref={refForSortedProductsSection}
        >
          <span>{`No "${filterValue}" products found`}</span>
        </SectionTitle>
      ) : null}
      <SaleSection ref={refForSaleCategory} />
      <InstagramSection ref={refForShopCategory} />
    </HomepageStyle>
  );
}

export default Homepage;
