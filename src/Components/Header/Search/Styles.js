import styled from "styled-components";

export const InputWrapper = {
  background: "#221ecd",
  height: "100%",
  width: 50,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  borderRight: "1px solid #ddd",
};

export const Input = styled.input`
  height: 100%;
  width: 100%;
  border: none;
  padding-left: 1rem !important;
  &&:focus {
    background: #fff !important;
  }
`;
