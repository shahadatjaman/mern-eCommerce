import { useEffect, useState } from "react";
import {
  deepClone,
  getLocalstorage,
  getTotalPrice,
  setLocalstorage,
} from "../utils";

export const useAddToCart = () => {
  const [items, setItem] = useState([]);
  const [isAdded, setIsAdded] = useState(false);
  const [totallPrices, setTotalPrcies] = useState(0);

  // TODO:
  // Add To Cart
  const addToCart = ({ _id, price, vendor_id }) => {
    const carts = getLocalstorage("carts");

    const productToCart = mapProductToCart(deepClone({ _id }));

    if (carts.length === 0) {
      productToCart.price = price;
      productToCart.vendor_id = vendor_id;
      setItem([...carts, productToCart]);
      setLocalstorage("carts", [productToCart]);
    } else {
      productToCart.price = price;
      setItem([...carts, productToCart]);
      const oldIndex = carts.findIndex(
        (item) => item.product_id.toString() === _id.toString()
      );

      if (oldIndex > -1) {
        const oldCarts = deepClone(carts);
        oldCarts[oldIndex].qty += 1;

        setLocalstorage("carts", oldCarts);
      } else {
        productToCart.vendor_id = vendor_id;
        setLocalstorage("carts", [...carts, productToCart]);
      }
    }

    return productToCart;
  };

  // Increment
  const increment = ({ _id }) => {
    const carts = getLocalstorage("carts");

    const oldIndex = carts.findIndex(
      (item) => item.product_id.toString() === _id.toString()
    );

    if (oldIndex > -1) {
      const oldCarts = deepClone(carts);
      oldCarts[oldIndex].qty += 1;

      setLocalstorage("carts", oldCarts);

      return oldCarts[oldIndex].cart;
    }
  };
  // Increment
  const decrement = ({ _id }) => {
    const carts = getLocalstorage("carts");

    const oldIndex = carts.findIndex(
      (item) => item.product_id.toString() === _id.toString()
    );

    if (oldIndex > -1) {
      const oldCarts = deepClone(carts);

      if (oldCarts[oldIndex].qty > 1) {
        oldCarts[oldIndex].qty -= 1;
        setLocalstorage("carts", oldCarts);
      } else {
        const filtered = oldCarts.filter(
          (cart) => cart.product_id.toString() !== _id.toString()
        );
        setLocalstorage("carts", filtered);
      }
    }
  };

  // add quantity
  const addQuantity = ({ _id, qty, price }) => {
    const carts = getLocalstorage("carts");

    if (carts && carts.length > 0) {
      const indexOfCart = carts.findIndex((cart) => cart.product_id === _id);

      if (indexOfCart > -1) {
        const oldCart = deepClone(carts);
        oldCart[indexOfCart].qty += qty;
        setLocalstorage("carts", oldCart);

        return oldCart[indexOfCart];
      } else {
        return addToCart({ _id, price });
      }
    } else {
      return addToCart({ _id, price });
    }
  };

  const totallPrice = () => {
    const carts = getLocalstorage("carts");

    const totalPrice = getTotalPrice({ carts });

    return totalPrice;
  };
  const carts = getLocalstorage("carts");
  useEffect(() => {
    const prices = carts?.reduce((prev, cur) => {
      const price = cur.qty * cur.price;

      return prev + price;
    }, 0);

    setTotalPrcies(prices);
  }, [carts]);

  // check cart is already added to cart or not
  const checkCartIsAddedIn = ({ _id }) => {
    const carts = getLocalstorage("carts");
    const indexOf = carts.findIndex(
      (item) => item.product_id.toString() === _id
    );
    if (indexOf > -1) {
      setIsAdded(true);
      return isAdded;
    } else {
      setIsAdded(false);
      return isAdded;
    }
  };

  const removeCart = ({ _id }) => {
    const carts = getLocalstorage("carts");

    const removedCarts = carts.filter(
      (cart) => cart.product_id.toString() !== _id.toString()
    );

    setLocalstorage("carts", removedCarts);

    return removedCarts;
  };

  useEffect(() => {
    const cartItems = getLocalstorage("carts");

    if (cartItems && cartItems.length !== 0) {
      setItem(cartItems);
    } else {
      return setItem([]);
    }
  }, []);

  return {
    addToCart,
    checkCartIsAddedIn,
    increment,
    decrement,
    items,
    isAdded,
    removeCart,
    totallPrice,
    addQuantity,

    totallPrices,
  };
};

const mapProductToCart = (values) => {
  return Object.keys(values).reduce((acc, cur) => {
    return {
      product_id: values[cur],
      qty: 1,
      color_option_id: "",
      size_option_id: "",
      price: 0,
    };
  }, {});
};
