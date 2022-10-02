import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { CartPlusMinus, Button, Count } from "./Styles";

const Quantity = ({ cart }) => {
  const [counter, setCounter] = useState(1);

  const { dimension } = useSelector((state) => state.productDetails);

  const increment = () => {
    setCounter((prev) => prev + 1);

    // Get CartItems from local storage
    const cartItems = localStorage.getItem("cart_Items")
      ? JSON.parse(localStorage.getItem("cart_Items"))
      : [];

    const cartIndex = cartItems.findIndex(
      (item) => item._id === cart._id && item.size === cart.size
    );

    if (cartIndex >= 0) {
      cartItems[cartIndex].qty = cartItems[cartIndex].qty + 1;
      cartItems[cartIndex].subtotal =
        cartItems[cartIndex].subtotal + cart.price;
      localStorage.setItem("cart_Items", JSON.stringify(cartItems));
    }
  };

  const decrement = () => {
    if (counter > 1) {
      setCounter((prev) => prev - 1);
    }
  };

  useEffect(() => {
    if (cart) {
      setCounter(cart.qty);
    }
  }, [cart]);

  return (
    <CartPlusMinus>
      <Button decrement onClick={decrement}>
        -
      </Button>
      <Count>{counter}</Count>
      <Button increment onClick={increment}>
        +
      </Button>
    </CartPlusMinus>
  );
};

export default Quantity;
