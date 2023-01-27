import styled from "styled-components";

export const LayoutWraper = styled.div``;

export const PageHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const Save = styled.button`
  font-size: 14px;
  font-weight: 700;
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

  // cursor: ${(props) => props.isValid && "pointer"};
`;

export const SatySave = styled.button`
  font-size: 14px;
  font-weight: 700;
  transition: all 0.3s ease 0s;
  text-transform: uppercase;
  color: ${(props) => (props.isValid ? "#000" : "#5e5c5c")};
  border: none;
  width: ${(props) => props.width && props.width}%;
  height: ${(props) => props.height && props.height}px;
  border-radius: ${(props) => props.radius}px;
  margin-top: 1rem;
  background: #fff;
  margin-right: 1rem;

  /* &&:hover {
    background: ${(props) => props.isValid && props.hoverColor};
  } */

  // cursor: ${(props) => props.isValid && "pointer"};
`;
