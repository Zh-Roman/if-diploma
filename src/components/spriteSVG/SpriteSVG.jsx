import React from "react";
import PropTypes from "prop-types";
import Sprite from "../../assets/images/SVG/sprite.svg";

function SpriteSvg({ name, className }) {
  return (
    <svg className={className}>
      <use href={`${Sprite}#${name}`} />
    </svg>
  );
}

SpriteSvg.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};
export default SpriteSvg;
