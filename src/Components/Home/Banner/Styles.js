import styled from "styled-components";
import { Container } from "react-bootstrap";

export const Wrapper = styled.div`
  margin: 2rem 0;
  height: 204px;
  overflow: hidden;
  position: relative;
  z-index: 9;
  &&::before {
    content: "";
    position: absolute;
    width: 595px;
    height: 561px;
    border-radius: 50%;
    background: #eee3e33d;
    top: -236px;
    left: -17px;
  }

  @media (max-width: 800px) {
    display: none;
  }
`;

export const Containerr = styled(Container)`
  background: #e65353;
  border-radius: 5px;
`;

export const Caption = styled.div`
  width: 355px;
  margin: auto;
  height: 204px;
  color: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;

  span {
    font-weight: 400;
    font-size: 26.22px;
    text-transform: uppercase;
  }
  h3 {
    font-weight: 800;
    font-style: italic;
    font-size: 74.47px;
    position: relative;
  }
  h3::after {
    content: "";
    position: absolute;
    top: -30px;
    right: 0;
    width: 207.19px;
    height: 19.8px;
    background: #fff;
  }
  h3::before {
    content: "";
    position: absolute;
    bottom: -35px;
    left: 0;
    width: 47.51px;
    height: 19.8px;
    background: #fff;
  }
`;

export const Dash = styled.span`
  margin-left: 4rem;
`;

export const Button = styled.div`
  height: 204px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  span {
    color: #e65353;
    width: 230px;
    height: 86px;
    background: #fff;
    display: flex;
    border-radius: 100px;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 47.37px;
    position: relative;
    cursor: pointer;

    p {
      position: absolute;
      font-size: 14.52px;
      font-weight: 600;
      top: 1rem;
      right: 3rem;
      color: #e65353;
    }
  }
`;

export const SubTitle = styled.p`
  font-weight: 400;
  font-size: 13.4px;
  letter-spacing: 0.4rem;
  text-transform: uppercase;
  color: #fff;
  margin-bottom: 7px;
`;

export const Nineteen = styled.p``;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: -12px;
  &&::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 250px;
    height: 118px;
    background: #ffffff4d;
    border-radius: 5px;
    border: 2px solid #ffffff70;
  }
`;

export const Img = styled.img`
  width: 130px;
  z-index: 999;
`;

export const BannerImg = styled.div``;

export const BannImg = styled.img``;
