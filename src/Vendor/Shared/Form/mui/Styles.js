import styled from "styled-components";

export const Color = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 0.4rem;
  background: ${(props) => props.bg && props.bg};
  display: inline-block;
`;

export const Error = styled.p`
  color: red;
`;
