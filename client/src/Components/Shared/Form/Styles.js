import styled from "styled-components";

import { Input } from "reactstrap";

export const FormWraaper = styled.form``;

export const InputWrapper = styled.div`
  position: relative;
  width: ${(props) => (props.width ? props.width : `100`)}%;
`;

export const Label = styled.label`
  position: absolute;
  right: 0;
  bottom: -8px;
  background: ${(props) => (props.disabled ? "#e9ecef" : "#221ecd0f")};
  width: 75px;
  height: 100%;
  border-radius: 0px 6px 5px 0px;
  border: 1px solid ${(props) => (props.disabled ? "#e9ecef" : "#c1e4fe")};
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    background: ${(props) => (props.disabled ? "#e9ecef" : "#221ecd")};
    color: ${(props) => (props.disabled ? "#5f5858" : "#fff")};
  }
`;

export const Span = styled.span`
  padding: 4px 15px;
  margin-left: ${(props) => (props.ml ? props.ml : "8")}px;
  display: inline-block;
  border-radius: 8px;
`;

export const Name = styled.label`
  font-size: 14px;
  margin: 0 0 5px;
  color: #242424;
  display: inline-block;
  font-weight: 500;
  margin: 0 0 7px;
`;

export const InputField = styled(Input)`
  border: 1px solid ${(props) => (props.error ? "red" : "#221ecd29")} !important;
  color: ${(props) => (props.bg ? "#fff" : "#333")};
  font-size: 14px;
  border-radius: ${(props) => (props.radius ? props.radius : ".375")}rem;
  width: 100%;
  height: ${(props) => (props.height ? props.height : 45)}px !important;
  font-weight: 500;
  /* padding: ${(props) =>
    props.height ? "17px 20px" : "0px 15px"}px !important ; */

  &&:focus {
    box-shadow: none !important;
    color: ${(props) => (props.bg ? "#fff" : "#333")} !important;
  }
  background: ${(props) => (props.bg ? props.bg : "transparent")};
  margin-bottom: ${(props) => props.mb && props.mb};
`;

export const ButtonWrap = styled.div`
  text-align: ${(props) => props.alignMent};
`;

export const Btn = styled.button`
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s ease 0s;
  text-transform: uppercase;
  color: ${(props) => (props.isValid ? "#fff" : "#5e5c5c")};
  border: none;
  width: ${(props) => props.width && props.width}%;
  height: ${(props) => props.height && props.height}px;
  border-radius: ${(props) => props.radius}px;
  margin-top: 1rem;
  background: ${(props) => (props.isValid ? props.activeColor : "#fff")};

  /* &&:hover {
    background: ${(props) => props.isValid && props.hoverColor};
  } */

  cursor: ${(props) => props.isValid && "pointer"};
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

export const Searched = styled.div`
  position: absolute;
  width: ${(props) => (props.searchWidth ? props.searchWidth : 20)}%;
  background: ${(props) => (props.bg ? props.bg : "#ff")};
  top: 5%;
  left: 1%;
  height: 92%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4rem 1px 1px 4rem;
  i {
    color: ${(props) => (props.bg ? "#fff" : "#221ecd")};
  }
`;
