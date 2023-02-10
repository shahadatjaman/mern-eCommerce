import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { Image, ImageWrapper, largeImg } from "./styles";

const ProdcutImg = ({ recentVariation }) => {
  const [zoomLevel, setZoomLevel] = useState(1);

  const imageRef = useRef(null);

  const handleMouseMove = (event) => {
    imageRef.current.getBoundingClientRect();

    setZoomLevel(2);
  };

  const handleMouseLeave = () => {
    setZoomLevel(1);
  };

  return (
    <ImageWrapper
      sx={{ ...largeImg }}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {recentVariation && (
        <Image
          ref={imageRef}
          style={{
            transform: `scale(${zoomLevel})`,
            transition: "1s",
          }}
          src={recentVariation}
          alt="prodcut"
        />
      )}
    </ImageWrapper>
  );
};

export default ProdcutImg;
