import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import {
  StyleNewCollection,
  FrameMedia,
  FrameVideo,
  FrameContent,
  FrameTextContent,
  GalleryFrame,
  GalleryName,
  GalleryScroll,
  ScrollContainer,
  SoundSection,
  SoundSectionTitle,
  SoundGif,
  Soundtrack,
} from "./StyleNewCollection";

function NewCollectionSection({ collectionData }) {
  const testRef = useRef(null);
  const soundButtonRef = useRef(null);
  const audioRef = useRef(null);
  useEffect(() => {
    const zSpacing = -1000;
    let lastPos = zSpacing / 5;
    const $frames = testRef.current.getElementsByClassName("frame");
    const frames = Array.from($frames);
    const zVals = [];
    window.onscroll = () => {
      const top = document.documentElement.scrollTop;
      const delta = lastPos - top;
      lastPos = top;

      frames.forEach((n, i) => {
        zVals.push(i * zSpacing + zSpacing);
        zVals[i] += delta * -5;
        const frame = frames[i];
        const transform = `translateZ(${zVals[i]}px)`;
        const opacity = zVals[i] < Math.abs(zSpacing) / 1.5 ? 1 : 0;
        frame.setAttribute(
          "style",
          `transform: ${transform}; opacity: ${opacity}`
        );
      });
    };
    window.scrollTo(0, 1);
    if (audioRef.current) {
      window.onfocus = () =>
        soundButtonRef.current.classList.contains("paused")
          ? audioRef.current.pause()
          : audioRef.current.play();

      window.onblur = () => audioRef.current.pause();
    }
  });
  const handlePlayAudio = () => {
    soundButtonRef.current.classList.toggle("paused");
    return audioRef.current.paused
      ? audioRef.current.play()
      : audioRef.current.pause();
  };

  return (
    <StyleNewCollection
      backgroundColor={collectionData.backgroundColor}
      background09={collectionData.background09}
      color={collectionData.color}
    >
      <ScrollContainer>
        <GalleryScroll ref={testRef}>
          <GalleryFrame className="frame">
            <FrameContent>
              <GalleryName background04={collectionData.background04}>
                {collectionData.collectionName}
              </GalleryName>
            </FrameContent>
          </GalleryFrame>

          <GalleryFrame className="frame">
            <FrameContent>
              <FrameMedia
                className="frame-media-left"
                style={{ backgroundImage: collectionData.images.image1 }}
              />
            </FrameContent>
          </GalleryFrame>

          <GalleryFrame className=" frame frame_bg">
            <FrameContent>
              <FrameVideo
                className="frame-video-right"
                src={collectionData.videos.video1}
                autoPlay
                muted
                loop
              />
            </FrameContent>
          </GalleryFrame>

          <GalleryFrame className="frame" />

          <GalleryFrame className="frame">
            <FrameContent className="text-right">
              <FrameTextContent>
                {collectionData.textContent.text1}
              </FrameTextContent>
            </FrameContent>
          </GalleryFrame>

          <GalleryFrame className="frame frame_bg">
            <FrameContent>
              <FrameMedia
                className="frame-media-left"
                style={{ backgroundImage: collectionData.images.image2 }}
              />
            </FrameContent>
          </GalleryFrame>

          <GalleryFrame className="frame" />

          <GalleryFrame className="frame">
            <FrameContent>
              <FrameMedia
                className="frame-media-right"
                style={{ backgroundImage: collectionData.images.image3 }}
              />
            </FrameContent>
          </GalleryFrame>

          <GalleryFrame className="frame" />

          <GalleryFrame className="frame frame_bg">
            <FrameContent className="text-left">
              <FrameTextContent>
                {collectionData.textContent.text2}
              </FrameTextContent>
            </FrameContent>
          </GalleryFrame>

          <GalleryFrame className="frame frame_bg">
            <FrameContent className="text-right">
              <FrameMedia
                className="frame-media-left"
                style={{ backgroundImage: collectionData.images.image4 }}
              />
            </FrameContent>
          </GalleryFrame>

          <GalleryFrame className="frame" />

          <GalleryFrame className="frame frame_bg">
            <FrameContent>
              <FrameVideo
                className="frame-video-left"
                src={collectionData.videos.video2}
                autoPlay
                muted
                loop
              />
            </FrameContent>
          </GalleryFrame>
          <GalleryFrame className="frame" />

          <GalleryFrame className="frame frame_bg">
            <FrameContent>
              <FrameMedia
                className="frame-media-right"
                style={{ backgroundImage: collectionData.images.image5 }}
              />
            </FrameContent>
          </GalleryFrame>

          <GalleryFrame className="frame frame_bg">
            <FrameContent>
              <FrameVideo
                src={collectionData.videos.mainVideo}
                autoPlay
                muted
                loop
              />
            </FrameContent>
          </GalleryFrame>
        </GalleryScroll>
      </ScrollContainer>
      <SoundSection onClick={handlePlayAudio}>
        <SoundSectionTitle>
          {collectionData.soundSection.soundSectionTitle}
        </SoundSectionTitle>
        <SoundGif
          src={collectionData.soundSection.soundGifUrl}
          ref={soundButtonRef}
          alt="sound_button"
          className="paused"
        />
      </SoundSection>
      <Soundtrack ref={audioRef} src={collectionData.soundtrack} loop />
    </StyleNewCollection>
  );
}

NewCollectionSection.propTypes = {
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
export default NewCollectionSection;
