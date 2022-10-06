// <===== Hooks =====>
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// <==== Reducer functions ====>
import { addCartItems, addcartTotal } from "../../../feature/reducer/addToCart";

// <==== Helper functions ====>
import { getLocalstorage, setLocalstorage, indexOfCart } from "../../../utils";

//<==== Styled components ====>
import { CartPlusMinus, Button, Count, AddToCart } from "./Styles";

const Quantity = () => {
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
    const cartItems = getLocalstorage("cart_Items");

    const cartIndex = indexOfCart(cartItems, dimension);

    // if exist or doesn't exist
    if (cartIndex > -1) {
      cartItems[cartIndex].qty += counter;
      cartItems[cartIndex].color = dimension.color;
      cartItems[cartIndex].img_url = dimension.img_url;
      cartItems[cartIndex].subtotal += dimension.price;

      setLocalstorage("cart_Items", [...cartItems]);
      dispatch(addCartItems(cartItems));

      // Store total price
      const totalPrice = getLocalstorage("cartTotal");

      // Update total price

      totalPrice.total += +dimension.price;
      totalPrice.totalQty += counter;

      setLocalstorage("cartTotal", totalPrice);
      dispatch(addcartTotal(totalPrice));
    } else {
      setLocalstorage("cart_Items", [...cartItems, dimension]);
      dispatch(addCartItems(cartItems));

      // Store cart total price in localStorage
      const totalPrice = getLocalstorage("cartTotal");

      if (Object.keys(totalPrice).length > 0) {
        totalPrice.total += dimension.price;
        totalPrice.totalQty += counter;

        setLocalstorage("cartTotal", totalPrice);
        dispatch(addcartTotal(totalPrice));
      } else {
        setLocalstorage("cartTotal", { total: dimension.price, totalQty: 1 });
        dispatch(addcartTotal(totalPrice));
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
