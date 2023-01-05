import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  margin: 10px 0;
`;

export const Increment = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  border: 1px solid #ddd;
  cursor: pointer;
`;

export const Decrement = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  border: 1px solid #ddd;
  cursor: pointer;
`;

export const Input = styled.input`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  border: 1px solid #ddd;
  background: #fff;
  padding: 0 10px;
  &&:focus {
    background: #fff;
  }
`;
