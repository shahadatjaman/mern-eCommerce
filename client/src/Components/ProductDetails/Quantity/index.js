// <===== Hooks =====>
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// <==== Reducer functions ====>
import {
  addCart,
  addCartItems,
  addcartTotal,
} from "../../../feature/reducer/addToCart";
import { useAddToCart } from "../../../hooks/useAddToCart";

// <==== MUI components ====>
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
//<==== Styled components ====>
import { QtyWrapper } from "./Styles";
import Quantity from "./IncrementDecrement";
import { getLocalstorage } from "../../../utils";

const Quantityy = () => {
  const [isAddToCart, setAddToCart] = useState(false);
  const [qtyValue, setQtyValue] = useState(1);

  const { product } = useSelector((state) => state.productDetails);

  const dispatch = useDispatch();

  const { addQuantity, checkCartIsAddedIn } = useAddToCart({
    _id: product?._id,
    price: product?.price.$numberDecimal,
  });

  useEffect(() => {
    const isAdded = checkCartIsAddedIn({ _id: product?._id });
    setAddToCart(isAdded);
  }, [checkCartIsAddedIn, product]);

  // Save cart to local storage
  const addTocartHandler = () => {
    const cart = addQuantity({
      _id: product._id,
      qty: qtyValue,
      price: product?.price.$numberDecimal,
    });

    if (!isAddToCart) {
      dispatch(addCart(cart));
    } else {
      const carts = getLocalstorage("carts");
      dispatch(addCartItems(carts));
    }
  };

  const cb = (qty) => {
    setQtyValue(qty);
  };

  return (
    <QtyWrapper>
      <Quantity cb={cb} />
      <Box mx={2}>
        <Button variant="contained" onClick={addTocartHandler}>
          Add To Cart
        </Button>
      </Box>
      <Box>
        <Button variant="contained" onClick={addTocartHandler}>
          Buy now
        </Button>
      </Box>
    </QtyWrapper>
  );
};

export default Quantityy;
