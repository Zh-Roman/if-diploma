import { useLayoutEffect, useState } from "react";

const useWindowSize = () => {
  const [sizeWidth, setSizeWidth] = useState(0);
  const [sizeHeight, setSizeHeight] = useState(0);
  useLayoutEffect(() => {
    function updateSize() {
      setSizeWidth(window.innerWidth);
      setSizeHeight(window.innerHeight);
    }

    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return {
    sizeWidth,
    sizeHeight,
  };
};

export default useWindowSize;
