import styled from "styled-components";

export const GalleryWrapper = styled.div`
  padding-bottom: 100px;
  padding-top: 100px;
`;

export const LargeImageWrapper = styled.div`
  max-width: 440px;
`;

export const Image = styled.img`
  max-width: 100%;
`;

export const SmallImageWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const SmallWrapper = styled.div`
  max-width: 100px;
  cursor: pointer;
`;

export const SmallImg = styled.img`
  max-width: 100%;
`;

export const Gallery = styled.div``;

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

// Product Color Styles

export const ColorSizeWrapper = styled.div`
  display: flex;
`;

export const Color = styled.div``;

export const Small = styled.span`
  font-weight: 600;
  display: inline-block;
  color: #000;
  margin: 0 0 15px;
`;

export const ColorContent = styled.div``;

export const Label = styled.label`
  position: relative;
  margin-right: 15px;
  margin-right: ${(props) => props.size && "4px"};
`;

export const Input = styled.input`
  cursor: pointer;
  display: inline-block;
  width: 25px;
  height: 25px;
  &&[type="radio"]:after {
    width: 20px;
    height: 20px;
    border-radius: 15px;
    top: 2px;
    left: 2px;
    position: relative;
    background-color: ${(props) => props.bg && props.bg};
    content: "";
    display: inline-block;
    visibility: visible;
    border: 2px solid white;
  }
`;

export const Colored = styled.span`
  position: absolute;
  width: 10px;
  height: 10px;
  background: red;
  border-radius: 50%;
  left: 1px;
  top: 25%;
`;

export const Size = styled.div`
  margin-left: 1rem;
`;

export const SizeContent = styled.div``;

export const Selected = styled.span`
  position: absolute;
  font-size: 12px;
  font-weight: 400;
  width: 100%;
  margin-bottom: 0;
  padding: 8px;
  background: #fed700;
  left: 0;
  z-index: -1;
`;

export const InputSize = styled.input`
  z-index: 99;
  cursor: pointer;
  width: 30px;
  height: 25px;
  opacity: 0;
`;
