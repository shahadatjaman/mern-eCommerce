import styled from "styled-components";

export const Selection = styled.div``;

export const Deletion = styled.div`
  width: ${(props) => (props.width ? props.width : 100)}%;
  display: inline-block;
  svg {
    font-size: 26px;
    margin-left: 1rem;
    cursor: pointer;
  }
`;
