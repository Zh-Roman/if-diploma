import React from "react";
import TopSectionTitle from "../../components/topSectionParts/TopSectionTitle";
import TopSectionDescription from "../../components/topSectionParts/TopSectionDescription";
import TopSectionButton from "../../components/topSectionParts/TopSectionButton";
import { StyleTopSection, TopSectionContainer } from "./StyleTopSection";

function TopSection() {
  return (
    <StyleTopSection>
      <TopSectionContainer>
        <TopSectionTitle />
        <TopSectionDescription />
        <TopSectionButton />
      </TopSectionContainer>
    </StyleTopSection>
  );
}

export default TopSection;
