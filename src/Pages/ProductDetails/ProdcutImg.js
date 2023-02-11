import { Box } from "@mui/material";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Image, ImageWrapper, largeImg } from "./styles";
import Skeleton from "@mui/material/Skeleton";
const ProdcutImg = ({ recentVariation }) => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const { isLoading } = useSelector((state) => state.productDetails);
  const imageRef = useRef(null);

  const handleMouseMove = (event) => {
    imageRef.current.getBoundingClientRect();

    setZoomLevel(2);
  };

  const handleMouseLeave = () => {
    setZoomLevel(1);
  };

  return (
    <Box>
      {isLoading ? (
        <Skeleton
          sx={{ width: "550px", height: 500, margin: "0 auto" }}
          animation="pulse"
          variant="rectangular"
        />
      ) : (
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
      )}
    </Box>
  );
};

export default ProdcutImg;
