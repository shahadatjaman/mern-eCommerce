import styled from "styled-components";

// Product content styles

export const ProductContentWrapper = styled.div``;

export const H4 = styled.h4`
  font-size: 24px;
  line-height: 1;
  margin: 0;
  color: #010101;
`;

export const ProductPrice = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0 26px;
`;

export const Span = styled.span`
  font-size: 24px;
  color: #fe5252;
  font-weight: 500;
`;

export const OldPrice = styled.span`
  font-size: 18px;
  margin-left: 20px;
  text-decoration: line-through;
  color: #333;
`;

export const Text = styled.p`
  font-size: 15px;
  line-height: 28px;
  margin: 0;
  color: #333;
  margin: 20px 0 34px;
  padding: 0 0 37px;
  border-bottom: 1px solid #e5e5e5;
`;

// Product quantity styles

export const ProductQuantity = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 34px;
`;

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
  svg {
    font-size: 18px;
    color: #000;
  }
`;

export const ProductMeta = styled.div`
  display: flex;
  margin: 0 0 10px;
`;

export const MetaText = styled.span``;

export const Ul = styled.ul`
  margin: 0;
  padding: 0;
  list-style: outside none none;
  margin-left: 8px;
`;

export const Li = styled.li`
  display: inline-block;
  margin: 0 10px 0 0;
  margin-right: ${(props) => props.marginRight && props.marginRight}px;
  font-weight: 500;
  i {
    font-size: 16px;
    color: #343538;
    cursor: pointer;
  }
`;

export const SocialMedia = styled.div`
  margin: 24px 0 0;
`;

export const Icon = styled.i``;
