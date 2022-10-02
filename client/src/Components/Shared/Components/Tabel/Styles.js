import styled from "styled-components";

import { NavLink } from "react-router-dom";

export const Wrapper = styled.div``;

export const Link = styled(NavLink)`
  font-weight: 600;
  display: block;
  text-align: ${(props) => (props.textleft ? "left" : "center")};
`;
export const Text = styled.span`
  font-weight: 600;
  text-decoration: ${(props) => props.line_through && "line-through"};
  margin-right: ${(props) => props.line_through && "8px"};
  display: ${(props) => (props.disblock ? "block" : "inline-block")};
  text-align: left;
`;

export const Span = styled.span`
  margin-right: 1rem;
  font-weight: ${(props) => (props.active ? "600" : "500")};
`;

export const CartMain = styled.div`
  padding-bottom: 100px;
  padding-top: 90px;
`;

export const ItemEmpty = styled.div`
  text-align: center;
  svg {
    font-size: 6rem;
  }
`;

export const ItemEmptyIcon = styled.div`
  margin-bottom: 30px;
`;

export const ItemEmptyText = styled.div``;

export const CartItem = styled.div``;

export const AddItem = styled(NavLink)`
  font-size: 14px;
  font-weight: 500;
  display: inline-block;
  margin-top: 30px;
  padding: 10px 30px;
  transition: 0.3s;
  color: #fff;
  background-color: #363f4d;
  &&:hover {
    background: #fed700;
    color: #000;
  }
`;

// Cart Table

export const Title = styled.h4`
  font-size: 20px;
  font-weight: 500;
  margin: 0 0 15px;
`;

export const TableContent = styled.div`
  display: block;
  width: 100%;
  overflow-x: auto;
`;

export const Table = styled.table`
  border: 1px solid #ebebeb;
  border-collapse: collapse;
  width: 100%;
  border: 1px solid #ebebeb;
  background-color: #f9f9f9;
`;

export const Thead = styled.thead``;

export const Tr = styled.tr`
  border: 1px solid #ebebeb;
  background-color: ${(props) => props.bg};
`;

export const Th = styled.th`
  font-size: 14px;
  font-weight: 500;
  padding: 21px 45px 22px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-transform: uppercase;
  color: #333;
  border-top: none;
`;

export const TBody = styled.tbody`
  background: #fff;
`;

export const TData = styled.td`
  font-size: 15px;
  padding: 30px 0 30px 30px;
  text-align: center;
  color: #333;
  width: ${(props) => props.width}px;
`;

export const Img = styled.img`
  max-width: 100%;
  height: auto;
`;

export const Options = styled(NavLink)`
  font-size: 13px;
  font-weight: 500;
  line-height: 1.2;
  display: block;
  margin: 0 auto;
  padding: 10px 15px;
  text-transform: uppercase;
  color: #000;
  border: none;
  border-radius: 50px;
  background-color: #fed700;
  &&:hover {
    background: #000;
    color: #fff;
  }
`;

export const Close = styled.button`
  cursor: pointer;
`;

export const ShoppingUpdate = styled.div`
  padding: 30px 0 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  display: inline-block;
  padding: 18px 63px 17px;
  text-transform: uppercase;
  color: #363f4d;
  border-radius: 50px;
  cursor: pointer;
  background-color: #f2f2f2;
  &&:hover {
    background: #fed700;
  }
`;
