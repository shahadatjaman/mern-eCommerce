import { useDispatch } from "react-redux";

import { Clear, Cuntinue, ShoppingWrapper } from "./Styles";

const ShoppingUpdate = () => {
  const dispatch = useDispatch();

  return (
    <ShoppingWrapper>
      <Cuntinue to={"/"}>Cuntinue Shopping</Cuntinue>
      <Clear> Clear Shopping Cart </Clear>
    </ShoppingWrapper>
  );
};

export default ShoppingUpdate;
