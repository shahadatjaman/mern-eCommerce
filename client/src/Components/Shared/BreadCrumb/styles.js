import styled from "styled-components";

import { NavLink } from "react-router-dom";

export const BreadCrumb = styled.div`
  padding-bottom: 35px;
  padding-top: 35px;
  background-color: #f7f7f7;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
`;

export const Link = styled(NavLink)`
  font-weight: 600;
`;
export const Text = styled.span`
  font-weight: 600;
  text-decoration: ${(props) => props.line_through && "line-through"};
  margin-right: ${(props) => props.line_through && "8px"};
`;

export const Span = styled.span`
  margin-right: 1rem;
  font-weight: ${(props) => (props.active ? "600" : "500")};
  text-transform: uppercase;
`;
