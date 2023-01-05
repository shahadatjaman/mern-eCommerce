import styled from "styled-components";
import { Container } from "react-bootstrap";
import { Box } from "@mui/material";
// export const GalleryWrapper = styled.div`
//   padding-bottom: 100px;
//   padding-top: 100px;
// `;

export const SeffContainer = styled(Container)`
  max-width: 1400px !important;
`;

export const LargeImageWrapper = styled.div`
  width: 550px;
  border: 1px solid #ddd;
  height: 600px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  @media (max-width: 1150px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: 100%;
`;

export const SmallImageWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  border: 1px solid #ddd;
  width: 550px;
  margin-top: 1rem !important;
  @media (max-width: 1150px) {
    width: 100%;
  }
`;

export const SmallWrapper = styled.div`
  max-width: 100px;
  cursor: pointer;
  margin-right: 1rem;
  border: ${(props) => props.bordered && "2px solid #ddd"};
  border-right: 1px solid #ddd;
`;

export const SmallImg = styled.img`
  max-width: 100%;
  height: 100%;
`;

export const Gallery = styled.div``;

// Gallery wrapper
export const ImageWrapper = styled(Box)`
  @media (max-width: 1200px) {
    width: auto;
    margin: 0;
  }
`;

export const largeImg = {
  width: "550px",
  height: 500,
  borderRadius: 2,
  margin: "0 auto",
  backgroundColor: "white",
  overfolow: "hidden",
  marginRight: "3rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const gallerySm = {
  width: "400px",
  display: "flex",
  justifyContent: "start",
  height: 100,
  margin: "1rem auto",
  flexDirection: "row-reverse",
};

export const imgBox = {
  width: "32.55%",
  height: 100,
  backgroundColor: "white",
  borderRadius: 2,
  margin: "0 4px ",
};
