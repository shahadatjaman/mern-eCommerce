import styled from "styled-components";
import { Carousel } from "react-bootstrap";

export const SliderWrapper = styled.div`
  margin-top: 1rem;
`;

export const CarouselWrapper = styled(Carousel)`
  border-radius: 10px !important;
  overflow: hidden !important;
  .carousel-control-prev {
    display: none !important;
  }
`;

export const CarouselCaption = styled(Carousel.Caption)`
  text-align: left;
  button {
    font-style: Semi Bold;
    font-size: 10px;
    line-height: 18px;
    letter-spacing: 1%;
    font-weight: 600;
    border-radius: 500px;
    background: #633f97;
    padding: 10px 18px;
  }
  button:hover {
    background: #633f97;
  }
  button:focus {
    background: #633f97;
  }
`;

export const CategoriesWrapper = styled.div`
  background: #fff;
  /* height: 525px; */
  border-radius: 5px;
  padding: 2rem 1rem;
`;

export const CartTitel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const H5 = styled.h5`
  color: #453b3b;
  font-weight: 700;
  font-style: normal;
  font-size: 20px;
  line-height: 24.2px;
  letter-spacing: 1%;
`;

export const Span = styled.span`
  span {
    svg {
      color: #ca000f;
      cursor: pointer;
    }
  }
`;

export const Menubar = styled.div`
  /* ul {
    li {
      cursor: pointer;
      line-height: 18.15px;
      font-weight: 400;
      font-size: 15px;
      font-style: normal;
      margin: 1.5rem 0;
      display: flex;
      justify-content: space-between;
      span:first-child {
        svg {
          color: #000 !important;
          background: #ede8e8;
          border-radius: 5px;
          font-size: 21px;
          padding: 5px;
          margin-right: 7px;
        }
      }
      span {
        svg {
          color: #ca000f;
        }
      }
    }
  } */
`;

export const Ul = styled.ul``;

export const Li = styled.li`
  cursor: pointer;
  line-height: 18.15px;
  font-weight: 400;
  font-size: 15px;
  font-style: normal;
  margin: 1.5rem 0;
  display: flex;
  justify-content: space-between;
`;

export const ImgWrapper = styled.div`
  width: 26px;
  height: 26px;
  margin-right: 0.5rem;
  background: #e7e2e2;
  border-radius: 50%;
  padding: 3px;
`;

export const Img = styled.img`
  width: 100%;
`;

export const Name = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: 600;
  &&:first-child {
    svg {
      color: #221ecd !important;
      background: #ede8e8;
      border-radius: 5px;
      font-size: 21px;
      padding: 5px;
      margin-right: 7px;
    }
  }

  svg {
    color: #221ecd;
  }
`;
