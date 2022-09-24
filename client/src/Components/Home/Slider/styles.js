import styled from "styled-components";

export const Wrapper = styled.div`
  background: #dddddd61;
  height: 450px;
  overflow: hidden;
`;

// Single Slide
export const SingleSlideWrapper = styled.div``;

export const H4 = styled.h4``;

export const RightSlide = styled.div`
  position: relative;
`;

export const Image = styled.div``;

export const Img = styled.img`
  width: 100%;
`;
export const LeftSlide = styled.div`
  height: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
  margin-left: 4rem;
`;

// Next and Previus button
export const Buttons = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 50%;
`;
export const Previus = styled.button`
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background: #fff;
  margin-left: 1rem;
`;
export const Next = styled.button`
  cursor: pointer;
  width: 40px;
  height: 40px;
  background: #fff;
  border-radius: 50px;
  margin-right: 1rem;
`;
