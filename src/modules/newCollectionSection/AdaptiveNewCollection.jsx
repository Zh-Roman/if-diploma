import React, { useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";
import shortid from "shortid";
import { SoundGif, Soundtrack } from "./StyleNewCollection";

export const StyleAdaptiveNewCollection = styled.section`
  height: 100vh;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: calc(var(--index) * 2.4) calc(var(--index) * 1.2);

  .swiper {
    width: 70vw;
    height: 50vh;
  }

  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 18px;
    font-size: 22px;
    font-weight: bold;
    color: #fff;
  }
`;
export const NewCollectionAdaptiveCard = styled.div`
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
`;
export const NewCollectionAdaptiveText = styled.div`
  font-family: Raleway300, sans-serif;
  font-size: calc(var(--index) * 0.8);
  line-height: 1.2;
  text-align: justify;
`;
export const SoundSectionAdaptiveContainer = styled.div`
  display: flex;
  align-items: center;

  .paused {
    opacity: 0.25;
  }

  & p {
    font-family: Raleway300, sans-serif;
    font-size: calc(var(--index) * 0.5);
    line-height: 1.2;
  }
`;

function AdaptiveNewCollection({ collectionData }) {
  const soundButtonRef = useRef(null);
  const audioRef = useRef(null);
  const handlePlayAudio = () => {
    soundButtonRef.current.classList.toggle("paused");
    return audioRef.current.paused
      ? audioRef.current.play()
      : audioRef.current.pause();
  };
  if (audioRef.current) {
    window.onfocus = () =>
      soundButtonRef.current.classList.contains("paused")
        ? audioRef.current.pause()
        : audioRef.current.play();

    window.onblur = () => audioRef.current.pause();
  }
  return (
    <StyleAdaptiveNewCollection
      backgroundColor={collectionData.backgroundColor}
      color={collectionData.color}
    >
      <NewCollectionAdaptiveText>
        {collectionData.textContent.text1}
      </NewCollectionAdaptiveText>
      <Swiper effect="cards" modules={[EffectCards]} initialSlide={10}>
        {collectionData?.adaptiveSection.map((sliderCard) => (
          <SwiperSlide key={shortid.generate()}>
            <NewCollectionAdaptiveCard
              style={{ backgroundImage: sliderCard }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <SoundSectionAdaptiveContainer onClick={handlePlayAudio}>
        <SoundGif
          src={collectionData.soundSection.soundGifUrl}
          ref={soundButtonRef}
          alt="sound_button"
          className="paused"
        />
        <p>{collectionData.soundSection.soundSectionTitle}</p>
        <Soundtrack ref={audioRef} src={collectionData.soundtrack} loop />
      </SoundSectionAdaptiveContainer>

      <NewCollectionAdaptiveText>
        {collectionData.textContent.text2}
      </NewCollectionAdaptiveText>
    </StyleAdaptiveNewCollection>
  );
}

AdaptiveNewCollection.propTypes = {
  collectionData: PropTypes.shape({
    collectionName: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    background09: PropTypes.string.isRequired,
    background04: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    images: PropTypes.shape({
      image1: PropTypes.string.isRequired,
      image2: PropTypes.string.isRequired,
      image3: PropTypes.string.isRequired,
      image4: PropTypes.string.isRequired,
      image5: PropTypes.string.isRequired,
    }),
    adaptiveSection: PropTypes.arrayOf(PropTypes.string).isRequired,
    videos: PropTypes.shape({
      mainVideo: PropTypes.string.isRequired,
      video1: PropTypes.string.isRequired,
      video2: PropTypes.string.isRequired,
    }),
    soundtrack: PropTypes.string.isRequired,
    textContent: PropTypes.shape({
      text1: PropTypes.string.isRequired,
      text2: PropTypes.string.isRequired,
    }),
    soundSection: PropTypes.shape({
      soundSectionTitle: PropTypes.string.isRequired,
      soundGifUrl: PropTypes.string.isRequired,
    }),
  }),
};
export default AdaptiveNewCollection;
