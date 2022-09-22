import styled from "styled-components";

import { NavLink } from "react-router-dom";

export const HeaderWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 8px 20px 0 rgb(0 0 0 / 10%);
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

// Nav LOGO
export const Logo = styled.div`
  width: 10%;
`;

export const H3 = styled.h3``;

// Main Menu
export const MainMenu = styled.div`
  width: 70%;
`;

// Header Right
export const HeaderRightWrapper = styled.div`
  width: 20%;
  display: flex;
  margin-top: 32px;
  justify-content: space-around;
`;

// Header main Menu list
export const Ul = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Li = styled.li`
  position: relative;
  display: inline-block;
  padding: 0 15px;
`;

export const Link = styled(NavLink)`
  font-size: 15px;
  font-weight: 500;
  line-height: 94px;
  display: inline-block;
  letter-spacing: 0.8px;
  color: #555252;
`;

export const Icon = styled.button`
  font-size: 23px;
  color: #000;
  cursor: pointer;
`;
