import styled from "styled-components";

// Product quantity styles

// Incremnet and decrease button wrapper
export const CartPlusMinus = styled.div`
  position: relative;
  overflow: hidden;
  width: 120px;
  height: 60px;
  padding: 0;
  border: 1px solid #e8e8e8;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  font-size: 25px;
  font-weight: 500;
  line-height: 20px;
  position: absolute;
  float: inherit;
  width: 24px;
  margin: 0;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  text-align: center;
  color: #8f8f8f;
  border: none;
  background: none;
  height: 60px;

  top: ${(props) => props.increment && "0"};
  right: ${(props) => props.increment && "0"};
  top: ${(props) => props.decrement && "0"};
  left: ${(props) => props.decrement && "0"};
`;

export const Count = styled.span``;
