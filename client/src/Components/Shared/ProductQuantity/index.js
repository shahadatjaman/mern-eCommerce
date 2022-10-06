// <=== Hooks ====>
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

// <=== Reducer functions ====>
import {
  addCartItems,
  addcartTotal,
} from "../../../feature/reducer/addToCart/";

// <=== Styled Components  ====>
import { CartPlusMinus, Button, Count } from "./Styles";

// <=== Helper functions ====?
import { indexOfCart, getLocalstorage, setLocalstorage } from "../../../utils";

const Quantity = ({ cart }) => {
  const [counter, setCounter] = useState(1);

  const dispatch = useDispatch();

  // Increment cart dimension
  const increment = () => {
    setCounter((prev) => prev + 1);

    const cartItems = getLocalstorage("cart_Items");

    const cartIndex = indexOfCart(cartItems, cart);

    // If exist cart
    if (cartIndex >= 0) {
      // Incremenet cart quantity
      cartItems[cartIndex].qty += 1;

      // Increment sub total price
      cartItems[cartIndex].subtotal += cart.price;

      setLocalstorage("cart_Items", cartItems);
      dispatch(addCartItems(cartItems));

      // Increment cart total prices and quantity
      const cartTotal = getLocalstorage("cartTotal");

      if (cartTotal) {
        cartTotal.total += cart.price;
        cartTotal.totalQty += 1;

        setLocalstorage("cartTotal", cartTotal);
        dispatch(addcartTotal(cartTotal));
      }
    }
  };

  // Decrement cart dimension
  const decrement = () => {
    // Decrement cart quantity
    if (counter > 1) {
      setCounter((prev) => prev - 1);
    }

    const cartItems = getLocalstorage("cart_Items");
    const cartTotal = getLocalstorage("cartTotal");

    const cartIndex = indexOfCart(cartItems, cart);

    // Check cart index is available and if cart qty greater than 1
    if (cartIndex >= 0 && cartItems[cartIndex].qty > 1) {
      // Decrement cart qty and subtotal
      cartItems[cartIndex].qty -= 1;
      cartItems[cartIndex].subtotal -= cart.price;

      setLocalstorage("cart_Items", cartItems);
      dispatch(addCartItems(cartItems));

      // Decrement cart total prices and quantity
      if (cartTotal) {
        cartTotal.total -= cart.price;
        cartTotal.totalQty -= 1;

        setLocalstorage("cartTotal", cartTotal);

        dispatch(addcartTotal(cartTotal));
      }
    }

    // If cart qty less than 1 and remove the cart
    if (cart.qty <= 1 && cartIndex >= 0) {
      cartItems.splice(cartIndex, 1);

      setLocalstorage("cart_Items", cartItems);

      dispatch(addCartItems(cartItems));

      // Decrement cart total price and  quantity
      if (cartTotal) {
        cartTotal.total = cartTotal.total - cart.price;
        cartTotal.totalQty -= 1;

        setLocalstorage("cartTotal", cartTotal);
        dispatch(addcartTotal(cartTotal));
      }
    }
  };

  // Store current qty in  local state
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
