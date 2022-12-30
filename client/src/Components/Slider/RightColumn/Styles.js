import styled from "styled-components";

export const FeaturesItems = styled.div`
  border-radius: 5px;
  background: #ffffff;
  padding: 16px;
  margin-bottom: 16px;
`;

export const Items = styled.div``;

export const ImgWrapper = styled.div`
  background: #f5f5f5;
  border-radius: 5px;
  max-width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  width: 100%;
`;

export const Caption = styled.div``;

export const Title = styled.div`
  height: 54px;
  padding: 0;
  margin-bottom: 3.5rem;
`;

export const H5 = styled.h5`
  font-weight: 400;
  font-size: 15px !important;
  line-height: 18.15px;
  letter-spacing: -1.7%;
  color: #333e48;
`;

export const Span = styled.span`
  color: #000;
  text-transform: uppercase;
  font-weight: 700;
`;

export const Button = styled.div`
  font-weight: 700;
  font-style: normal;
  font-size: 15px;
  line-height: 18.15px;
  letter-spacing: -1.7%;
  cursor: pointer;
  &&:hover {
    background: #633f97;
  }
  &&:focus {
    background: #633f97;
  }
`;
