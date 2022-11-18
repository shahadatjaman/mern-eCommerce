import styled from "styled-components";

import { Link } from "react-router-dom";

// Styles a Product
export const ProductWrap = styled.div`
  margin-bottom: 2rem;
  position: relative;
  &&:hover .action {
    bottom: 0;
    visibility: visible;
    opacity: 1;
    transition: all 0.3s ease 0s;
  }
  &:hover .hide {
    display: block;
  }
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
  z-index: 9;
  bottom: -22px;
  left: 50%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  transform: translateX(-50%);
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s ease 0s;
`;

export const Action = styled.button`
  width: ${(props) => props.width && props.width}px;
  width: calc(100% - ${(props) => props.widthCalc && props.widthCalc}px);
  background: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  font-size: 16px;
  line-height: 48px;
  font-weight: 600;
  color: #fff;
  &:hover {
    background: #fff;
    color: #000;
    i {
      color: #000;
    }
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
