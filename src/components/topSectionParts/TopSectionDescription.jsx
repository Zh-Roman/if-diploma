import React from "react";
import styled from "styled-components";
import { TopSectionDescriptionText } from "../../configs/stringData";

const StyleTopSectionDescription = styled.p`
  white-space: pre-line;
  font-weight: 400;
  font-size: calc(var(--index) * 0.7);
  line-height: calc(var(--index) * 1.05);
  margin-bottom: calc(var(--index) * 1.317);
`;
function TopSectionDescription() {
  return (
    <StyleTopSectionDescription>
      {" "}
      {TopSectionDescriptionText}
    </StyleTopSectionDescription>
  );
}

export default TopSectionDescription;
