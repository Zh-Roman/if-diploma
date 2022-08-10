import React, { useState } from "react";
import PropTypes from "prop-types";
import useWindowSize from "../../hooks/useWindowSize";
import {
  StyleImageMagnifier,
  MagnifierContent,
  MagnifierPointer,
} from "./StyleImageMagnifier";

function ImageMagnifier({ src, alt }) {
  const windowWidth = useWindowSize().sizeWidth;
  const minWindowWidth = 850;
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [[xPos, yPos], setXY] = useState([0, 0]);
  return (
    <StyleImageMagnifier>
      <MagnifierContent
        src={src}
        alt={alt}
        onMouseEnter={(e) => {
          const elem = e.currentTarget;
          const { width, height } = elem.getBoundingClientRect();
          setSize([width, height]);
          setShowMagnifier(true);
        }}
        onMouseLeave={() => {
          setShowMagnifier(false);
        }}
        onMouseMove={(e) => {
          const elem = e.currentTarget;
          const { top, left } = elem.getBoundingClientRect();
          const x = e.pageX - left - window.scrollX;
          const y = e.pageY - top - window.scrollY;
          setXY([x, y]);
        }}
      />
      {windowWidth > minWindowWidth && (
        <MagnifierPointer
          showMagnifier={showMagnifier}
          yPos={yPos}
          xPos={xPos}
          src={src}
          imgWidth={imgWidth}
          imgHeight={imgHeight}
        />
      )}
    </StyleImageMagnifier>
  );
}

ImageMagnifier.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};
export default ImageMagnifier;
