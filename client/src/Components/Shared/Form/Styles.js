import styled from "styled-components";

import { Input } from "reactstrap";

export const FormWraaper = styled.form``;

export const Label = styled.label`
  font-size: 14px;
  margin: 0 0 5px;
  color: #242424;
  display: inline-block;
  font-weight: 600;
`;

export const InputField = styled(Input)`
  background-color: transparent;
  border: 1px solid ${(props) => (props.error ? "red" : "#ddd")};
  color: #333;
  font-size: 14px;
  height: 45px;
  font-weight: 500;
  padding: 0 15px;
  width: 100%;
  &&:focus {
    box-shadow: none !important;
  }
`;

export const Btn = styled.button`
  font-size: 14px;
  font-weight: 600;
  padding: 13px 42px 12px;
  transition: all 0.3s ease 0s;
  text-transform: uppercase;
  color: #000;
  border: none;
  /* border-radius: 50px; */
  margin-top: 1rem;
  background: ${(props) => props.activeColor};
  &&:hover {
    background: ${(props) =>
      props.hoverColor ? props.hoverColor : props.activeColor};
    color: ${(props) => (props.hoverColor ? "#fff" : "#000")};
  }
`;

export const InputGroup = styled.div`
  margin-bottom: 5px;
  position: relative;
`;

export const P = styled.p`
  color: red;
  font-weight: 500;
  margin: 0;
`;
