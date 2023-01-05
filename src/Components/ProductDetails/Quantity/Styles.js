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

export const CartPlusMinus = styled.div``;

export const Btn = styled.button``;

export const Count = styled.span``;

export const QtyWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;
