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
import { ButtonWraaper, QTYWraper, QtyWrapper } from "./Styles";
import Quantity from "./IncrementDecrement";
import { getLocalstorage } from "../../../utils";
import { useNavigate } from "react-router-dom";

const Quantityy = () => {
  const [isAddToCart, setAddToCart] = useState(false);
  const [qtyValue, setQtyValue] = useState(1);

  const { product } = useSelector((state) => state.productDetails);

  const navigate = useNavigate();

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
  const addTocartHandler = (type) => {
    if (type === "buy") {
      navigate("/billing");
    }

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
      <QTYWraper>
        <Quantity cb={cb} />
      </QTYWraper>

      <ButtonWraaper>
        <Button
          sx={{ mx: 1 }}
          variant="contained"
          onClick={() => addTocartHandler("add")}
        >
          Add To Cart
        </Button>

        <Button variant="contained" onClick={() => addTocartHandler("buy")}>
          Buy now
        </Button>
      </ButtonWraaper>
    </QtyWrapper>
  );
};

export default Quantityy;
