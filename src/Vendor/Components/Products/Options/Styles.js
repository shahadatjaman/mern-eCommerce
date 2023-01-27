import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 2rem;
`;

export const Selection = styled.div`
  width: ${(props) => props.width && props.width}%;
`;

export const Deletion = styled.div`
  width: ${(props) => (props.width ? props.width : 100)}%;
  display: inline-block;
  svg {
    font-size: 26px;
    margin-left: 1rem;
    cursor: pointer;
  }
`;

export const OptionsAndValues = styled.div`
  display: flex;
  justify-content: start;
`;

export const SubmitForm = styled.div`
  margin-top: 1rem;
`;
