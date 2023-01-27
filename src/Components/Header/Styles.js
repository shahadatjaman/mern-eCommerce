import styled from "styled-components";

import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const HeaderWrapper = styled.div`
  padding: 0 1.5rem;
  @media (max-width: 990px) {
    padding: 0 1rem;
  }
  @media (max-width: 1200px) {
    padding: 0 !important;
  }
  position: ${(props) => (props.isSticky ? "fixed" : "inherit")};
  width: 100%;
  top: ${(props) => (props.isSticky ? "0" : "-100")}%;
  z-index: 999;
  transition: all 0.5s;
  box-shadow: ${(props) =>
    props.isSticky
      ? "1px 6px 16px 1px #0000001c"
      : "0px 4px 8px 0px #00000017"};

  backdrop-filter: blur(15px);
  background: ${(props) => (props.isSticky ? "#ffffff2b" : "#fff")};
  @media print {
    display: none;
  }
`;

// Logo
export const Logo = styled.span`
  font-size: 34px;
  font-weight: 600;
`;

export const Toggler = styled.div`
  margin-right: 0.8rem;
  cursor: pointer;
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

export const NavbarBrand = styled.div`
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
  margin-left: 28px;
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
  right: -40%;
  width: 26px;
  height: 25px;
  background: #ea2b0f;
  color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;
  font-weight: 600;
`;

export const CategoriesWrapper = styled.div`
  background: #221ecd;
  border-top: 1px solid #dddddd9e;
  @media (max-width: 1200px) {
    display: none !important;
  }
`;

export const NabvarToggle = styled(Navbar.Toggle)`
  border: none;
  i {
    color: #453b3b;
    margin-right: 12px;
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
  margin-left: auto;

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
  color: #fff !important;
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

  a,
  span {
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

export const Logout = styled.span`
  font-weight: 500;
  cursor: pointer;
`;

export const AvatarWrapper = styled.div`
  width: 40px;
  height: 40px;
  overflow: hidden;
  border-radius: 50%;
  border: 1px solid #ddd;
`;

export const Img = styled.img`
  width: 100%;
`;

export const Form = styled.form``;
