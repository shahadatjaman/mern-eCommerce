import styled from "styled-components";

export const Wrapper = styled.div``;

export const Buttons = styled.div``;

export const Button = styled.button`
  width: auto;
  height: 20px;
  background: #ddd;
`;

export const Counter = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${(props) => (props.active ? "#1976d2" : "#edf2fd")};
  color: ${(props) => (props.active ? "#fff" : "#000")};
  margin-right: 1rem;
  &&:last-child {
    margin-right: 0rem !important;
  }
  transition: all 0.5s;
  cursor: ${(props) => (props.active ? "inherit" : "pointer")} !important;
`;
