import React, { forwardRef, useState } from "react";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import {
  SaleHashtag,
  LogoHashtag,
  AirmasterWomenText,
  AirmasterMenText,
} from "../../configs/stringData";
import SliderWithFourEl from "../../components/sliderWithFourEl/SliderWithFourEl";
import {
  womenCollection,
  menCollection,
} from "../../configs/airmasterCollectionsData";
import {
  StyleSaleSection,
  AirmasterMenCollection,
  AirmasterWomenCollection,
  CollectionButton,
  CategoryContainer,
} from "./StyleSaleSection";

const SaleSection = forwardRef((props, ref) => {
  const [collectionData, setCollectionData] = useState(null);
  const [sliderToShow, setSliderToShow] = useState(0);
  const [categoryToShow, setCategoryToShow] = useState(true);
  const handleWomenCollectionClick = () => {
    setCollectionData(womenCollection);
    setCategoryToShow(false);
    setTimeout(() => setSliderToShow(1), 150);
  };
  const handleMenCollectionClick = () => {
    setCollectionData(menCollection);
    setCategoryToShow(false);
    setTimeout(() => setSliderToShow(1), 150);
  };
  return (
    <StyleSaleSection
      className="_container"
      categoryToShow={categoryToShow}
      ref={ref}
    >
      <SectionTitle>
        {LogoHashtag}
        <span>{SaleHashtag}</span>
      </SectionTitle>
      <CategoryContainer categoryToShow={categoryToShow}>
        <AirmasterWomenCollection>
          <CollectionButton
            categoryToShow={categoryToShow}
            type="button"
            onClick={handleWomenCollectionClick}
          >
            {AirmasterWomenText.toUpperCase()}
          </CollectionButton>
        </AirmasterWomenCollection>
        <AirmasterMenCollection>
          <CollectionButton
            categoryToShow={categoryToShow}
            type="button"
            onClick={handleMenCollectionClick}
          >
            {AirmasterMenText.toUpperCase()}
          </CollectionButton>
        </AirmasterMenCollection>
      </CategoryContainer>
      <SliderWithFourEl
        sliderToShow={sliderToShow}
        collectionData={collectionData}
      />
    </StyleSaleSection>
  );
});

export default SaleSection;
