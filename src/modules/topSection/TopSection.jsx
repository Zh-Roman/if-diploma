import React from "react";
import styled from "styled-components";
import mainBackground from "../../assets/images/topSection/mainBackground.jpg";
import TopSectionTitle from "../../components/topSection/TopSectionTitle";
import TopSectionDescription from "../../components/topSection/TopSectionDescription";
import TopSectionButton from "../../components/topSection/TopSectionButton";

const StyleTopSection = styled.section`
  min-height: 100vh;
  background: url(${mainBackground}) top no-repeat;
  background-size: cover;
  color: var(--main-white);
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: end;
  padding-left: calc(var(--index) * 6.6);
  padding-bottom: calc(var(--index) * 4.4);
`;

function TopSection() {
  return (
    <StyleTopSection>
      <TopSectionTitle />
      <TopSectionDescription />
      <TopSectionButton />
    </StyleTopSection>
  );
}

export default TopSection;
