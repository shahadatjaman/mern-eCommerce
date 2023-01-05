import { useEffect } from "react";
import { useState } from "react";
import {
  deepClone,
  getLocalstorage,
  removeLocalstorage,
  setLocalstorage,
} from "../utils";

export const useWish = () => {
  const [state, setState] = useState(null);

  const addToWish = ({ product_id }) => {
    if (product_id) {
      const getWish = getLocalstorage("wish__list");

      const cloned = deepClone(getWish);

      if (cloned.length !== 0) {
        // Check the prodcut is already exist or not!
        const filtered = cloned.findIndex((val) => val._id === product_id);

        if (filtered === -1) {
          setLocalstorage("wish__list", [...cloned, { _id: product_id }]);
          setState([...cloned, { _id: product_id }]);
        } else {
          // setLocalstorage("wish__list", [...cloned, { _id: product_id }]);
          setState(cloned);
        }
      } else {
        setLocalstorage("wish__list", [{ _id: product_id }]);
        setState([{ _id: product_id }]);
      }
    }
  };

  const removeWish = (product_id) => {
    let getWish = getLocalstorage("wish__list");

    if (getWish) {
      getWish = getWish.filter((val) => val._id !== product_id);
      setLocalstorage("wish__list", [...getWish]);
      setState(getWish);
    }
  };
  useEffect(() => {
    const items = getLocalstorage("wish__list");
    if (items.length !== 0) {
      setState(items);
    }
  }, []);

  const clearWish = () => {
    removeLocalstorage("wish__list");
  };

  return { addToWish, removeWish, state, clearWish };
};
