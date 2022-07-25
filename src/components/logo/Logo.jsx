import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LogoText } from "../../configs/stringData";

const StyleLogo = styled.h1`
  font-size: calc(var(--index) * 1.537);
  line-height: calc(var(--index) * 1.537);
  font-family: Helvetica73, sans-serif;

  @media screen and (max-width: 851px) {
    margin-right: calc(var(--index) * -0.878);
    font-size: calc(var(--index) * 0.92);
    line-height: calc(var(--index) * 0.92);
  }
`;

function Logo() {
  return (
    <Link to="/">
      <StyleLogo>{LogoText}</StyleLogo>
    </Link>
  );
}

export default Logo;
