import styled from "styled-components";

export const GalleryWrapper = styled.div`
  padding-bottom: 100px;
  padding-top: 100px;
`;

export const LargeImageWrapper = styled.div`
  max-width: 440px;
`;

export const Image = styled.img`
  max-width: 100%;
`;

export const SmallImageWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-top: 8px;
`;

export const SmallWrapper = styled.div`
  max-width: 100px;
  cursor: pointer;
  margin-right: 10px;
  border: ${(props) => props.bordered && "2px solid #ddd"};
`;

export const SmallImg = styled.img`
  max-width: 100%;
`;

export const Gallery = styled.div``;
