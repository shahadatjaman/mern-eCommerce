import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div``;

export const Tab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  a {
    font-size: 25px;
    font-weight: 700;
    margin: 0 20px;
    text-transform: capitalize;
    transition: all 0.3s ease 0s;
  }
  a.active {
    color: ${(props) => (props.isActive ? "#000" : props.theme.colors.primary)};
  }
`;

export const Link = styled(NavLink)`
  font-size: 25px;
  font-weight: 700;
  margin: 0 20px;
  text-transform: capitalize;
  transition: all 0.3s ease 0s;
  &&:hover {
    text-decoration: none;
  }
`;

export const FormWrape = styled.div`
  background: transparent none repeat scroll 0 0;
  box-shadow: 0 0 6px rgb(0 0 0 / 10%);
  padding: 80px;
  text-align: left;
  max-width: 650px;
  margin: auto;
`;

export const ShowPassword = styled.div`
  margin-bottom: 30px;
`;
export const Checkmark = styled.input`
  cursor: pointer;
  height: 15px;
  margin: 0;
  position: relative;
  top: 1px;
  width: 17px;
`;
export const Label = styled.label`
  font-size: 14px;
  margin-left: 10px;
  font-weight: 500;
`;

export const P = styled.p`
  font-size: 14px;
  color: red;
  font-weight: 600;
  margin-top: 4px;
`;

export const H5 = styled.h5`
  display: block;
  text-align: center;
  font-weight: 600;
  margin-top: 1rem;
  text-transform: uppercase;
  font-size: 14px;
  margin-bottom: 1rem;
`;

export const GoogleWrape = styled.button`
  margin-left: 1rem;
  box-shadow: 0 0 8px rgb(0 0 0 / 22%);
  border-radius: 50%;
  svg {
    color: ${(props) => props.color};
    font-size: 32px;
  }
`;

export const SignWith = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const resourcesError = styled.div``;

export const Error = styled.p`
  color: red;
  font-weight: 500;
  margin: 0;
`;
