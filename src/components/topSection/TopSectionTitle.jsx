import React from "react";
import styled from "styled-components";
import { TopSectionTitleText } from "../../configs/stringData";

const StyleTopSectionTitle = styled.h2`
  text-transform: uppercase;
  font-weight: 700;
  font-size: calc(var(--index) * 1.668);
  line-height: calc(var(--index) * 1.668);
  margin-bottom: calc(var(--index) * 0.878);
`;

function TopSectionTitle() {
  return <StyleTopSectionTitle>{TopSectionTitleText}</StyleTopSectionTitle>;
}

export default TopSectionTitle;
