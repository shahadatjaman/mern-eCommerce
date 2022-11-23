import styled from "styled-components";

import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const HeaderWrapper = styled.div`
  background: #fff;
  padding: 0 1.5rem;
  @media (max-width: 990px) {
    padding: 0 1rem;
  }
  position: ${(props) => (props.isSticky ? "fixed" : "relative")};
  width: 100%;
  z-index: 999;
  transition: all 0.8s;
  box-shadow: ${(props) => props.isSticky && "1px 6px 16px 1px #0000001c"};
`;

// Logo
export const Logo = styled.span`
  font-size: 34px;
  font-weight: 600;
`;

export const Toggler = styled.div`
  margin-right: 0.8rem;

  @media (min-width: 1200px) {
    display: none;
  }

  svg {
    font-size: 22px;
  }
`;

export const Searchpanle = styled.input`
  /* border: 1px solid #e2e2e2 !important;
  border-radius: 25.5px;
  box-sizing: border-box;
  height: 51px; */
`;

export const NavbarBrand = styled(Navbar.Brand)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderRightWrapper = styled.div`
  display: flex;
  @media (max-width: 1199px) {
    display: none !important;
  }
`;

export const Item = styled.div`
  margin-left: 18px;
  position: relative;

  svg {
    font-size: 16px;
    margin-bottom: 8px;
  }
  span {
    font-weight: 500;
    font-style: normal;
    font-size: 14px;
    line-height: 16.94px;
    letter-spacing: 1%;
  }
`;

export const Action = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Count = styled.div`
  position: absolute;
  top: -26%;
  right: -84%;
  width: 26px;
  height: 25px;
  background: #221ecd;
  color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;
`;

export const CategoriesWrapper = styled.div`
  background: #fff;
  @media (max-width: 1200px) {
    display: none !important;
  }
`;

export const NabvarToggle = styled(Navbar.Toggle)`
  border: none;
  svg {
    color: #453b3b;
    margin-right: 6px;
  }
  span {
    font-weight: 500;
    font-style: normal;
    font-size: 14px;
    line-height: 16.94px;
    letter-spacing: 1%;
    color: #453b3b;
  }
`;

export const NavLinks = styled.div`
  a:hover {
    color: #221ecd !important;
    transition: 0.1s;
  }

  @media (max-width: 768px) {
    /* position: fixed;
    height: 100%;
    left: -2%;
    top: 0%;
    z-index: 999;
    background: #ddd;
    overflow: hidden; */
  }
`;

export const LinkName = styled(NavLink)`
  font-weight: 500;
  font-style: normal;
  font-size: 14px;
  line-height: 16.94px;
  letter-spacing: 1% !important;
  color: #453b3b !important;
  margin: 0px 14px;
  cursor: pointer;
  svg {
    color: #221ecd;
    margin-left: 2px;
    font-weight: 500;
  }
`;

export const Categries = styled.div`
  display: flex;
`;

export const Ul = styled.ul``;

export const Li = styled.li`
  margin-bottom: 0.4rem;

  a {
    display: block !important;
  }
  &&:hover {
    a {
      color: #221ecd;
    }
  }
`;

export const Link = styled(NavLink)`
  font-weight: 500;
`;
