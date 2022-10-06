import styled from "styled-components";

import { Link } from "react-router-dom";

export const ShoppingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Cuntinue = styled(Link)`
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  display: inline-block;
  padding: 18px 63px 17px;
  text-transform: uppercase;
  color: #363f4d;
  border-radius: 50px;
  cursor: pointer;
  background: #f2f2f2;
  &&:hover {
    background: ${(props) => props.theme.colors.primary};
    color: #fff;
  }
`;

export const Clear = styled.button`
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  display: inline-block;
  padding: 18px 63px 17px;
  text-transform: uppercase;
  color: #363f4d;
  border-radius: 50px;
  cursor: pointer;
  background: #f2f2f2;
  &&:hover {
    background: ${(props) => props.theme.colors.primary};
    color: #fff;
  }
`;

// Cart Wrapper styles
export const Wrapper = styled.div`
  padding: 45px 30px 50px;
  border: 1px solid #ebebeb;
  border-radius: 5px;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

// Cart Title
export const TitleWrap = styled.div``;
export const H4 = styled.h4`
  font-size: 18px;
  font-weight: 600;
  display: inline-block;
  margin: 0;
  padding-right: 18px;
`;

// Cart Text
export const P = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  margin-top: 22px;
  margin-bottom: 15px;
  color: #333;
`;

export const Button = styled.button`
  font-size: 14px;
  font-weight: 500;
  padding: 13px 42px 12px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  text-transform: uppercase;
  color: #fff;
  border: none;
  border-radius: 50px;
  background-color: #a749ff;
`;
