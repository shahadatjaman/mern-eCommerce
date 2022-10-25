import styled from "styled-components";

import { NavLink } from "react-router-dom";

export const HeaderWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 8px 20px 0 rgb(0 0 0 / 10%);
  position: ${(props) => props.height > 500 && "fixed"};
  width: 100%;
  z-index: 99;
  transition: all 0.5s ease 0s;
  top: 0;
`;

export const Header = styled.header`
  display: flex;
  /* align-items: center;
  justify-content: space-between;
  position: relative; */
`;

// Nav LOGO
export const Logo = styled.div`
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  width: 70px;
`;

export const H3 = styled.h3`
  font-size: 35px;
`;

// Main Menu
export const MainMenu = styled.div`
  width: 68%;
`;

// Header Right
export const HeaderRightWrapper = styled.div`
  width: 20%;
  display: flex;
  justify-content: end;
  align-items: center;
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
  position: relative;
  margin-right: 15px;
`;

export const Count = styled.div`
  position: absolute;
  width: 22px;
  height: 22px;
  background: ${(props) => props.theme.colors.primary};
  border-radius: 50%;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  top: -12px;
  right: -75%;
`;

export const Account = styled.div`
  position: relative;
  cursor: pointer;
`;

export const User = styled.div`
  width: 40px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 1rem;
  position: relative;
`;

export const UserImg = styled.img`
  width: 100%;
`;

export const AccountWrap = styled.div`
  position: absolute;
  z-index: 220;
  top: 170%;
  left: 0;
  width: 200px;
  background: #fff none repeat scroll 0 0;
  padding: 8px 12px 10px;
  box-shadow: 0 1px 7px -2px rgb(0 0 0 / 30%);
  transition: all 0.5s ease 0s;
  transform-origin: center top 0;
  transform: rotateX(${(props) => !props.toggle && "90deg"});
  text-align: left;
  background: #fff none repeat scroll 0 0;
`;

export const UList = styled.ul``;

export const List = styled.li`
  transition: all 0.5s ease 0s;
  &&:hover {
    padding-left: 0.5rem;
    color: ${(props) => props.theme.colors.primary};
  }
`;
export const Href = styled(NavLink)`
  font-size: 13px;
  line-height: 30px;
  display: block;
  padding: 0;
  text-transform: capitalize;
  color: #000;
  font-weight: 500;
  &&:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;
