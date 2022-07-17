import React from "react";
import styled from "styled-components";
import { TopSectionButtonText } from "../../configs/stringData";

export const StyleTopSectionButton = styled.button`
  cursor: pointer;
  height: calc(var(--index) * 2.2);
  background-color: rgba(0, 0, 0, 0);
  text-transform: uppercase;
  font-weight: 400;
  font-size: calc(var(--index) * 0.7);
  line-height: calc(var(--index) * 0.7);
  padding: 0 calc(var(--index) * 1.6);
  color: var(--main-white);
  border: calc(var(--index) * 0.044) solid var(--main-white);
`;

function TopSectionButton() {
  return (
    <StyleTopSectionButton type="button">
      {TopSectionButtonText}
    </StyleTopSectionButton>
  );
}

export default TopSectionButton;
