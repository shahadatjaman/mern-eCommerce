import { useDispatch } from "react-redux";

import { Clear, Cuntinue, ShoppingWrapper } from "./Styles";

import { clearAddToCart } from "../../feature/reducer/addToCart/";
const ShoppingUpdate = () => {
  const dispatch = useDispatch();

  const clearCart = () => {
    dispatch(clearAddToCart());
  };

  return (
    <ShoppingWrapper>
      <Cuntinue to={"/"}>Cuntinue Shopping</Cuntinue>
      <Clear onClick={clearCart}> Clear Shopping Cart </Clear>
    </ShoppingWrapper>
  );
};

export default ShoppingUpdate;
