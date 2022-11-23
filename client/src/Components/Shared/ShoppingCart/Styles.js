import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: ${(props) => (props.width ? props.width : "340")}px;
  height: ${(props) => (props.height ? props.height : "400")}px;
  background: #fff;
  box-shadow: 1px 10px 10px 18px #dddddd45;
  padding: 1rem;
`;
