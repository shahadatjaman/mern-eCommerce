import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  background: #fff;
  padding: 1rem;
  border-radius: 5px;
`;

export const Menu = styled.div``;

export const Ul = styled.ul``;

export const Li = styled.li`
  margin: 0.5rem 0;
`;

export const LinkName = styled(NavLink)`
  color: #000;
  font-weight: 600;
  font-size: 16px;
  display: block;
  transition: all 0.5s;
  &&.active {
    color: #221ecd !important;
    background: #dddddd3b;
    padding: 8px;
    border-radius: 4px;
  }
`;
