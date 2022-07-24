import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFade, Navigation, Pagination } from "swiper";
import { useNavigate } from "react-router-dom";
import renaissanceMainImage from "../../assets/newCollectionMedia/img/RENAISSANCE/main.jpg";
import rebornMainImage from "../../assets/newCollectionMedia/img/Reborn/main.jpg";
import persolMainVideo from "../../assets/newCollectionMedia/video/Persol/po-dg-video.mp4";
import { StyleTopSectionButton } from "../../components/topSectionParts/TopSectionButton";
import SpriteSvg from "../../components/spriteSVG/SpriteSVG";
import {
  RebornTitleText,
  RenaissanceTitleText,
  PersolTitleText,
  SeeTheCollection,
} from "../../configs/stringData";
import {
  StyleNewArrivalSection,
  SliderContentContainer,
  InfoContentContainer,
  NewArrivalTextContent,
} from "./StyleNewArrival";

function NewArrivalSection() {
  const navigate = useNavigate();
  const renaissanceNavigate = () => navigate("/renaissance");
  const rebornNavigate = () => navigate("/reborn");
  const persolNavigate = () => navigate("/persol");
  return (
    <StyleNewArrivalSection className="_padding-top">
      <Swiper
        loop
        spaceBetween={30}
        effect="fade"
        navigation
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Pagination, Navigation]}
      >
        <SwiperSlide>
          <SliderContentContainer>
            <img src={renaissanceMainImage} alt="renaissance collection" />
            <InfoContentContainer>
              <SpriteSvg name="DGLogo" className="DGLogo" />
              <NewArrivalTextContent>
                {RenaissanceTitleText}
              </NewArrivalTextContent>
              <StyleTopSectionButton onClick={renaissanceNavigate}>
                {SeeTheCollection}
              </StyleTopSectionButton>
            </InfoContentContainer>
          </SliderContentContainer>
        </SwiperSlide>
        <SwiperSlide>
          <SliderContentContainer>
            <img src={rebornMainImage} alt="reborn collection" />
            <InfoContentContainer>
              <SpriteSvg name="DGLogo" className="DGLogo" />
              <NewArrivalTextContent>{RebornTitleText}</NewArrivalTextContent>
              <StyleTopSectionButton onClick={rebornNavigate}>
                {SeeTheCollection}
              </StyleTopSectionButton>
            </InfoContentContainer>
          </SliderContentContainer>
        </SwiperSlide>
        <SwiperSlide>
          <SliderContentContainer>
            <video src={persolMainVideo} autoPlay muted loop />
            <InfoContentContainer contentColor>
              <SpriteSvg name="DGLogo" className="DGLogo" />
              <NewArrivalTextContent>{PersolTitleText}</NewArrivalTextContent>
              <StyleTopSectionButton onClick={persolNavigate}>
                {SeeTheCollection}
              </StyleTopSectionButton>
            </InfoContentContainer>
          </SliderContentContainer>
        </SwiperSlide>
      </Swiper>
    </StyleNewArrivalSection>
  );
}

export default NewArrivalSection;
