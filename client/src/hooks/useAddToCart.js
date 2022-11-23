import { useState } from "react";
import { deepClone, getLocalstorage, setLocalstorage } from "../utils";

export const useAddToCart = () => {
  const [items, setItem] = useState([]);
  const [isAdded, setIsAdded] = useState(false);

  // Add To Cart
  const addToCart = ({ _id, price }) => {
    const carts = getLocalstorage("carts");

    const productToCart = mapProductToCart(deepClone({ _id }));

    if (carts.length === 0) {
      productToCart.cart.price = price;

      setItem([...carts, productToCart]);
      setLocalstorage("carts", [productToCart]);
    } else {
      productToCart.cart.price = price;
      setItem([...carts, productToCart]);
      const oldIndex = carts.findIndex(
        (item) => item.cart._id.toString() === _id.toString()
      );

      if (oldIndex > -1) {
        const oldCarts = deepClone(carts);
        oldCarts[oldIndex].cart.qty += 1;

        setLocalstorage("carts", oldCarts);
      } else {
        setLocalstorage("carts", [...carts, productToCart]);
      }
    }

    return productToCart;
  };

  // Increment
  const increment = ({ _id }) => {
    const carts = getLocalstorage("carts");

    const oldIndex = carts.findIndex(
      (item) => item.cart._id.toString() === _id.toString()
    );

    if (oldIndex > -1) {
      const oldCarts = deepClone(carts);
      oldCarts[oldIndex].cart.qty += 1;

      setLocalstorage("carts", oldCarts);
    }
  };
  // Increment
  const decrement = ({ _id }) => {
    const carts = getLocalstorage("carts");

    const oldIndex = carts.findIndex(
      (item) => item.cart._id.toString() === _id.toString()
    );

    if (oldIndex > -1) {
      const oldCarts = deepClone(carts);

      if (oldCarts[oldIndex].cart.qty > 1) {
        oldCarts[oldIndex].cart.qty -= 1;
        setLocalstorage("carts", oldCarts);
      } else {
        const filtered = oldCarts.filter(
          (cart) => cart.cart._id.toString() !== _id.toString()
        );
        setLocalstorage("carts", filtered);
      }
    }
  };

  const totallPrice = () => {
    const carts = getLocalstorage("carts");

    const prices = carts.reduce((prev, cur) => {
      const price = cur.cart.qty * cur.cart.price;

      return prev + price;
    }, 0);

    return prices;
  };

  // check cart is already added to cart or not
  const checkCartIsAddedIn = ({ _id }) => {
    const carts = getLocalstorage("carts");
    const indexOf = carts.findIndex((item) => item.cart._id.toString() === _id);
    if (indexOf > -1) {
      setIsAdded(true);
    } else {
      setIsAdded(false);
    }
  };

  const removeCart = ({ _id }) => {
    const carts = getLocalstorage("carts");

    const removedCarts = carts.filter(
      (cart) => cart.cart._id.toString() !== _id.toString()
    );

    setLocalstorage("carts", removedCarts);

    return removedCarts;
  };

  return {
    addToCart,
    checkCartIsAddedIn,
    increment,
    decrement,
    items,
    isAdded,
    removeCart,
    totallPrice,
  };
};

const mapProductToCart = (values) => {
  return Object.keys(values).reduce((acc, cur) => {
    acc["cart"] = {
      _id: values[cur],
      qty: 2,
      color: "",
      size: "",
      price: 0,
    };
    return acc;
  }, {});
};
