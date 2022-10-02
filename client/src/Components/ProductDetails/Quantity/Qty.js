import { useSelector, useDispatch } from "react-redux";

import { useState } from "react";
import { CartPlusMinus, Button, Count, AddToCart } from "./Styles";

import { addCartItems, cartTotal } from "../../../feature/reducer/addToCart";

const Quantity = ({ qty }) => {
  const [counter, setCounter] = useState(1);

  const { dimension } = useSelector((state) => state.productDetails);

  const dispatch = useDispatch();

  const increment = () => {
    setCounter((prev) => prev + 1);
  };
  const decrement = () => {
    if (counter > 1) setCounter((prev) => prev - 1);
  };

  // Save cart to local storage
  const addTocart = () => {
    const cartItems = localStorage.getItem("cart_Items")
      ? JSON.parse(localStorage.getItem("cart_Items"))
      : [];

    const cartIndex = cartItems?.findIndex(
      (item) => item._id === dimension._id && item.size === dimension.size
    );

    // if exist or doesn't exist
    if (cartIndex > -1) {
      cartItems[cartIndex].qty = cartItems[cartIndex].qty + counter;
      cartItems[cartIndex].color = dimension.color;
      cartItems[cartIndex].img_url = dimension.img_url;
      cartItems[cartIndex].subtotal =
        cartItems[cartIndex].subtotal + dimension.price * counter;
      localStorage.setItem("cart_Items", JSON.stringify([...cartItems]));
      dispatch(addCartItems(cartItems));

      // Store total price
      const totalPrice = localStorage.getItem("cartTotal")
        ? JSON.parse(localStorage.getItem("cartTotal"))
        : null;

      // Update total price
      totalPrice.total = totalPrice.total + dimension.price;
      totalPrice.totalQty = totalPrice.totalQty + counter;
      localStorage.setItem("cartTotal", JSON.stringify(totalPrice));
      dispatch(cartTotal(totalPrice));
    } else {
      //Store cart items in localStorage
      localStorage.setItem(
        "cart_Items",
        JSON.stringify([...cartItems, dimension])
      );
      dispatch(addCartItems(cartItems));

      // Store cart total price in localStorage
      const totalPrice = localStorage.getItem("cartTotal")
        ? JSON.parse(localStorage.getItem("cartTotal"))
        : null;

      if (totalPrice) {
        totalPrice.total = totalPrice.total + dimension.price;
        totalPrice.totalQty = totalPrice.totalQty + counter;
        localStorage.setItem("cartTotal", JSON.stringify(totalPrice));
        dispatch(cartTotal(totalPrice));
      } else {
        localStorage.setItem(
          "cartTotal",
          JSON.stringify({ total: dimension.price, totalQty: 1 })
        );
        dispatch(cartTotal(totalPrice));
      }
    }
    setCounter(1);
  };

  return (
    <>
      <CartPlusMinus>
        <Button decrement onClick={decrement}>
          -
        </Button>
        <Count>{counter}</Count>
        <Button increment onClick={increment}>
          +
        </Button>
      </CartPlusMinus>
      <AddToCart onClick={addTocart}>Add To Cart</AddToCart>
    </>
  );
};

export default Quantity;
