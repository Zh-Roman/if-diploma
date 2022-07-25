import styled from "styled-components";

export const StyleNewCollection = styled.section`
  height: max(calc(var(--index) * 110), 5000px);
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  font-family: Raleway300, sans-serif;
  font-size: calc(var(--index) * 1.05);
  line-height: calc(var(--index) * 1.23);

  .frame_bg {
    background-color: ${(props) => props.background09};
  }

  .frame-media-left {
    right: calc(
      var(--side-small) / 2 * var(--index) + calc(var(--index) * 0.66)
    );
  }

  .frame-media-right {
    left: calc(
      var(--side-small) / 2 * var(--index) + calc(var(--index) * 0.66)
    );
  }

  .frame-video-right {
    left: calc(var(--side-big) / 2 * var(--index) + calc(var(--index) * 0.66));
  }

  .frame-video-left {
    right: calc(var(--side-big) / 2 * var(--index) + calc(var(--index) * 0.66));
  }

  .text-right > * {
    position: relative;
    left: 20vw;
  }

  .text-left > * {
    position: relative;
    right: 20vw;
  }

  .paused {
    opacity: 0.25;
  }
`;
export const ScrollContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  perspective: calc(var(--index) * 32.93);
`;
export const GalleryScroll = styled.section`
  transform-style: preserve-3d;
  height: 100%;
`;
export const GalleryFrame = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: var(--transition), opacity 0.75s ease;
  will-change: transform;
  transform-style: preserve-3d;
`;
export const FrameContent = styled.div``;
export const GalleryName = styled.h2`
  font-family: Raleway100, sans-serif;
  font-weight: 100;
  text-transform: uppercase;
  text-align: center;
  font-size: calc(var(--index) * 3.3);
  line-height: calc(var(--index) * 3.5);
  background-color: ${(props) => props.background04};
`;
export const FrameMedia = styled.div`
  width: calc(var(--index) * var(--side-small));
  height: calc(var(--index) * var(--side-big));
  position: relative;
  background-position: center;
  background-size: cover;
`;
export const FrameVideo = styled.video`
  width: calc(var(--index) * var(--side-big));
  height: calc(var(--index) * var(--side-small));
  position: relative;
  background-position: center;
  background-size: cover;
`;
export const FrameTextContent = styled.h3`
  font-size: calc(var(--index) * 1.5);
  line-height: calc(var(--index) * 1.7);
  max-width: 40vw;
  font-family: Raleway100, sans-serif;
`;
export const SoundSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  position: fixed;
  bottom: 10vh;
  right: 5vw;
  cursor: pointer;
`;
export const SoundSectionTitle = styled.p`
  font-family: Raleway100, sans-serif;
  font-size: calc(var(--index) * 1.05);
  line-height: calc(var(--index) * 1.4);
  margin-bottom: calc(var(--index) * 0.7);
`;
export const SoundGif = styled.img`
  width: calc(var(--index) * 1.317);
  transition: 0.25s ease;
  margin-right: calc(var(--index) * 0.7);
`;
export const Soundtrack = styled.audio``;
