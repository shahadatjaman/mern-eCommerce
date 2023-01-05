import styled from "styled-components";

import { NavLink } from "react-router-dom";

export const H3 = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 20px;
  color: #000;
`;

export const OrderWrape = styled.div`
  padding: 38px 45px 44px;
  background: #fff;
`;

export const YourOrderTop = styled.div``;

export const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  li {
    font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "normal")};
    font-size: ${(props) => (props.fontSize ? props.fontSize : "16")}px;
  }
`;
export const Li = styled.li`
  list-style: outside none none;
  color: ${(props) => (props.color ? props.color : "#000")};
`;

export const OrderMiddle = styled.div`
  margin: 29px 0;
  padding: 19px 0 18px;
  border-top: 1px solid #dee0e4;
  border-bottom: 1px solid #dee0e4;
`;

export const OrderBottom = styled.div``;

export const OrderTotal = styled.div`
  margin: 18px 0 33px;
  padding: 17px 0 19px;
  border-top: 1px solid #dee0e4;
  border-bottom: 1px solid #dee0e4;
`;

export const PlaceOrder = styled.div`
  text-align: center;
`;

export const TabWrapper = styled.div`
  background: #fff;
  display: flex;
  position: relative;
  margin-top: 2rem;
  a {
    text-transform: uppercase;
    font-weight: 500;
  }
`;

export const Billing = styled.div`
  width: 50%;
  position: relative;
  &&::after {
    content: "";
    position: absolute;
    right: 22px;
    top: 7px;
    border: solid 0.4em;
    border-top-color: #fff;
    border-right-color: #fff;
    border-bottom-color: ${(props) => props.theme.colors.gray};
    border-left-color: ${(props) => props.theme.colors.gray};

    width: 40px;
    height: 40px;
    z-index: 99999;
    transform: rotate(46deg);
  }
`;

export const SbubmitBtn = styled.div``;

export const TabLink = styled(NavLink)`
  display: inline-block;
  width: 100%;
  height: 100%;
  padding: 1rem 0.8rem;
  display: flex;
  font-weight: 600 !important;
  svg {
    font-size: 28px;
    margin-right: 0.5rem;
    color: green;
  }
`;

export const Circle = styled.span`
  width: 28px;
  height: 28px;
  border: 3px solid #000;
  border-radius: 50px;
  margin-right: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 900;
`;

export const OrderWrapper = styled.div`
  margin-bottom: 2rem;
  padding-top: 4rem;
`;

export const PaymentWrap = styled.div``;

export const PaymentGateway = styled.div`
  display: flex;
`;

export const Methods = styled.div``;

export const Method = styled.div`
  width: 80px;
  margin-right: 0.5rem;

  border: ${(props) =>
    props.activemethod ? "4px solid green" : "4px solid #ddd"};
  cursor: ${(props) => props.active && "pointer"};
`;

export const Logo = styled.img`
  width: 100%;
`;

export const Text = styled.p`
  font-weight: 500;
`;

export const Order = styled.div`
  width: 50%;
`;

export const formStyles = {
  background: "#fff",
  padding: "1rem",
};
