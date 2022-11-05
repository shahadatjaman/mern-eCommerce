import styled from "styled-components";
import { Container as contain } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  background: #f0f4f7;
  height: 100vh;
`;
export const SidebarWrape = styled.div`
  color: #000;
  transition: all 0.5s;
`;

export const Fixed = styled.div`
  position: fixed;
  position: fixed;
  width: 230px;
  background: #131720;
  height: 100%;
`;

export const TopSection = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 15px;
`;

export const Logo = styled.h1`
  font-size: 30px;
`;

export const Bars = styled.div`
  display: flex;
  font-size: 25px;
  margin-left: 50px;
`;

export const SelfContainer = styled(contain)`
  padding: 0 !important;
  display: flex;
  height: 100vh;
`;

export const Link = styled(NavLink)`
  display: flex;
  color: #fff;
  padding: 10px 15px;
  gap: 15px;
  transition: all 0.5s;
  &&:hover {
    background: #42454c;
    color: #fff;
    transition: all 0.5s;
  }
`;

export const LinkText = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  svg {
    font-size: 18px;
  }
`;
export const Main = styled.div`
  width: 96%;
  //background: #f0f4f7;
`;
