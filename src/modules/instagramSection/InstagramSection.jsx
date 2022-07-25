import React, { forwardRef } from "react";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ShopText, Instagram, LogoHashtag } from "../../configs/stringData";
import {
  StyleInstagramSection,
  InstagramSectionTitle,
  InstagramSectionGrid,
  InstagramSectionItem,
  LogoHashtagDiv,
} from "./StyleInstagramSection";

const instagramPics = [
  {
    id: 1,
    imgUrl: require("../../assets/images/instagram/1.jpg"),
  },
  {
    id: 2,
    imgUrl: require("../../assets/images/instagram/2.jpg"),
  },
  {
    id: 3,
    imgUrl: require("../../assets/images/instagram/3.jpg"),
  },
  {
    id: 4,
    imgUrl: require("../../assets/images/instagram/4.jpg"),
  },
  {
    id: 5,
    imgUrl: require("../../assets/images/instagram/5.jpg"),
  },
];

const InstagramSection = forwardRef((props, ref) => (
  <StyleInstagramSection className="_container" ref={ref}>
    <InstagramSectionTitle>
      {ShopText}&nbsp;
      {Instagram}
      <span>
        {ShopText} <FontAwesomeIcon icon={faAngleRight} />
      </span>
    </InstagramSectionTitle>
    <InstagramSectionGrid>
      {instagramPics.map((pic) => (
        <InstagramSectionItem key={pic.id} bcgImg={pic.imgUrl} />
      ))}
    </InstagramSectionGrid>
    <LogoHashtagDiv>{LogoHashtag}</LogoHashtagDiv>
  </StyleInstagramSection>
));

export default InstagramSection;
