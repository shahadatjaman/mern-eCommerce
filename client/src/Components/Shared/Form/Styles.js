import styled from "styled-components";

import { Input } from "reactstrap";

export const FormWraaper = styled.form``;

export const Label = styled.label`
  font-size: 14px;
  margin: 0 0 5px;
  color: #242424;
  display: inline-block;
  font-weight: 500;
  margin: 0 0 7px;
`;

export const InputField = styled(Input)`
  background-color: transparent;
  border: 1px solid ${(props) => (props.error ? "red" : "#c1e4fe")} !important;
  color: #333;
  font-size: 14px;
  //height: 45px;
  height: ${(props) => (props.height ? props.height : 45)}px !important;
  font-weight: 500;

  padding: ${(props) =>
    props.height ? "17px 20px" : "0px 15px"}px !important ;
  width: ${(props) => (props.width ? props.width : `100`)}%;
  &&:focus {
    box-shadow: none !important;
  }
`;

export const ButtonWrap = styled.div`
  text-align: ${(props) => props.alignMent};
`;

export const Btn = styled.button`
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s ease 0s;
  text-transform: uppercase;
  color: #000;
  border: none;
  width: ${(props) => props.width && props.width}%;
  height: ${(props) => props.height && props.height}px;
  border-radius: ${(props) => props.radius}px;
  margin-top: 1rem;
  background: ${(props) => props.activeColor};
  &&:hover {
    background: ${(props) =>
      props.hoverColor ? props.hoverColor : props.activeColor};
    color: ${(props) => (props.hoverColor ? "#fff" : "#000")};
  }
`;
export const InputGroup = styled.div`
  margin-bottom: ${(props) => props.mb && props.mb}rem;
  position: relative;
  width: ${(props) => (props.width ? props.width : 100)}%;
  display: inline-block;
`;

export const P = styled.p`
  color: red;
  font-weight: 500;
  font-size: 12px;
  font-weight: 500;
  margin: 0;
`;

export const TextArea = styled.div``;
