import styled from "styled-components";

export const Input = styled.input``;

export const PriceWrapper = styled.div`
  position: relative;
  display: inline-block;
  overflow: hidden;
  margin-right: 2rem;
  width: ${(props) => (props.width ? props.width : "100")}%;
  display: flex;
  flex-direction: column;
`;

export const PInput = styled.input`
  border: 1px solid #c1e4fe;
  background: transparent;
  padding: 6px 12px;
  border-radius: 0.25rem;
  width: 100%;
  height: 45px;
  &&:focus {
    box-shadow: none !important;
  }
`;

export const Name = styled.div`
  margin: 0.3rem 0;
  font-size: 14px;
  color: #242424;
  display: inline-block;
  font-weight: 500;
`;

export const Label = styled.label`
  position: absolute;
  right: 0;
  bottom: -8px;
  background: #eaf7ff;
  width: 75px;
  height: 60%;
  border-radius: 0px 6px 5px 0px;
  border: 1px solid #c1e4fe;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Span = styled.span`
  background: ${(props) => (props.bg ? props.bg : "#ddd")};
  color: ${(props) => (props.bg ? "#fff" : "#000")};
  padding: 4px 8px;
  margin-left: ${(props) => (props.ml ? props.ml : "8")}px;
  display: inline-block;
  border-radius: 8px;
`;
