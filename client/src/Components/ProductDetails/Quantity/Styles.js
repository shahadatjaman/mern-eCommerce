import styled from "styled-components";

export const ProductQuantity = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 34px;
`;

export const AddToCart = styled.button`
  font-weight: 700;
  line-height: 1;
  z-index: 99;
  display: inline-block;
  padding: 23px 38px;
  text-transform: uppercase;
  color: #fff;
  border: none;
  background: none;
  background-color: #343538;
  margin: 0 25px 0 10px;
`;

export const WishList = styled.div``;

export const AddToWishList = styled.button`
  font-size: 18px;
  color: #000;
  border: none;
  background: none;
  svg {
    font-size: 18px;
    color: #000;
  }
`;

export const AddToCompare = styled.button`
  font-size: 18px;
  color: #000;
  border: none;
  background: none;
  margin-left: 25px;
  text-transform: uppercase;
  svg {
    font-size: 18px;
    color: #000;
  }
`;

// Product quantity styles

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
