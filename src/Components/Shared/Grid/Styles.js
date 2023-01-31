import styled from "styled-components";

export const Wrapper = styled.div`
  svg {
    cursor: pointer;
  }
`;

export const Span = styled.span`
  margin-right: 1rem;
`;

export const Icon = styled.i`
  font-size: 14px;
`;

export const Grid = styled.div`
  width: 50px;
  height: 50px;
  color: ${(props) => (props.isActive ? "#fff" : "#000")};
  background: ${(props) => (props.isActive ? "#1976d2" : "#edf2fd")};
  display: inline-block;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.5rem;
  font-size: 22px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
`;
