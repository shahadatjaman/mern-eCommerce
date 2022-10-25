import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const Button = styled.div`
  border: 1px solid #ddd;
  padding: 4px 14px;
  margin-right: 1rem;
`;

export const Link = styled(NavLink)`
  svg {
    font-size: 20px;
  }
`;
