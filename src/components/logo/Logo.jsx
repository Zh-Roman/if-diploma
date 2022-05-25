import React from "react";
import styled from "styled-components";
import { LogoText } from "../../configs/stringData";

const StyleLogo = styled.h1`
  font-size: calc(var(--index) * 1.537);
  line-height: calc(var(--index) * 1.537);
  font-family: Helvetica73, sans-serif;
`;

function Logo() {
  return <StyleLogo>{LogoText}</StyleLogo>;
}

export default Logo;
