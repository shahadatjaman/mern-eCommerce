import styled from "styled-components";

import { Link } from "react-router-dom";

// Styles a Product
export const ProductWrap = styled.div`
  margin-bottom: 2rem;
  position: relative;
`;

export const ProductImage = styled.div`
  position: relative;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  transition: all 0.3s ease 0s;
  display: ${(props) => props.hide === "true" && "none"};
`;

export const ProductContent = styled.div`
  margin: 20px 0 0;
`;

export const ImgLink = styled(Link)``;

export const Title = styled.div`
  font-size: 16px;
  color: #000;
  font-weight: 500;
`;

// Product Actions
export const ProductAction = styled.div`
  position: absolute;
  right: -20%;
  top: 9%;
  display: flex;
  flex-direction: column;
  transition: all 0.5s;
  opacity: 0;
`;

export const Action = styled.button`
  width: 40px;
  height: 40px;
  background: #fff;
  border-radius: 50%;
  margin-bottom: 1rem;
  cursor: ${(props) => (props.isAdded ? "no-drop" : "pointer")} !important;
  &&:hover {
    background: #221ecd;
    color: #fff;
    i {
      color: #fff;
    }
  }
  i {
    color: #000;
  }
`;

export const Ratting = styled.div`
  margin: 8px 0;
  svg {
    font-size: 17px;
    margin: 0 3px;
    color: #ffa900;
  }
`;

export const Icon = styled.i`
  margin: 0 4px;
  font-size: 16px;
  color: #fff;
  font-weight: 500;
`;

export const Price = styled.div``;

export const Span = styled.span`
  margin: 0 4px;
  font-size: 16px;
  color: #000;
  font-weight: 500;
`;

export const Old = styled.span`
  text-decoration: line-through;
  margin: 0 4px;
  font-size: 16px;
  color: #000;
  font-weight: 500;
  transform: rotate(350deg);
  display: inline-block;
  color: #7f7f83;
`;

export const ColorWrapper = styled.div`
  margin: 1rem 0;
  display: flex;
`;

export const Color = styled.div`
  margin-right: 1rem;
  border: ${(props) => props.active && `1px solid #221ecd`};
  border-radius: 50%;
  padding: 3px;
`;

export const MainColor = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: ${(props) => props.bg && props.bg};
`;

export const SizeWrapper = styled.div`
  margin: 1rem 0;
  display: flex;
`;

export const Size = styled.div`
  margin-right: 1rem;
`;

export const MainSize = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => (props.active ? `#221ecd` : "#ddd")};
  color: ${(props) => (props.active ? `#fff` : "#000")};
  font-weight: 600;
  border-radius: 5px;
`;

export const ShoppingWrapper = styled.div`
  background: #ffffff;
  margin-top: 1rem;
  padding: 14px 0;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  &&:hover .action {
    right: 9%;
    opacity: 1;
  }
`;

export const ImgWrapper = styled.div`
  background: #edf2fd;
  height: 220px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 230px;
  margin: 0 auto;
  overflow: hidden;
  @media (max-width: 1400px) {
    width: auto;
    margin: 0px 8px;
  }
`;

export const ShoppingImg = styled.img`
  width: 100%;
  object-position: 0px 22px;
`;

export const ShoppingTitle = styled.div`
  margin-top: 8px;
  h6 {
    font-weight: 700;
    font-size: 15px;
    color: #453b3b;
    margin-top: 1rem;
    text-align: left;
  }
`;

export const Content = styled.div`
  padding: 0.8rem;
`;

export const DiscountWrapper = styled.div`
  position: absolute;
  left: 6%;
  top: 5%;
`;

export const Discount = styled.div`
  width: 40px;
  height: 40px;
  background: #221ecd;
  color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  font-size: 12px;
  font-weight: 700;
`;
