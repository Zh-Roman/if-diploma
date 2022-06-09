import React from "react";
import TopSectionTitle from "../../components/topSection/TopSectionTitle";
import TopSectionDescription from "../../components/topSection/TopSectionDescription";
import TopSectionButton from "../../components/topSection/TopSectionButton";
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
