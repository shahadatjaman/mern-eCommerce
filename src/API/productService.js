import { useState } from "react";
import { callApi } from "../utils";

const useProductService = () => {
  const [items, setItems] = useState({
    items: null,
    loading: false,
    message: null,
  });

  const [item, setItem] = useState({
    item: null,
    loading: false,
    message: null,
  });

  const fetchItems = async () => {
    setItems((prev) => {
      return { ...prev, loading: true };
    });
    try {
      const products = await callApi({
        pathOne: "",
        pathTwo: "",
        values: {},
        method: "post",
        to: 0,
        from: 15,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setItems((prev) => {
        return { ...prev, loading: false };
      });
    }
  };

  const fetchItem = async () => {
    try {
      const product = await callApi({
        pathOne: "",
        pathTwo: "",
        values: {},
        method: "",
        to: 0,
        from: 15,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setItem((prev) => {
        return { ...prev, loading: false };
      });
    }
  };

  return {
    fetchItems,
    fetchItem,
    items,
    item,
  };
};

export default useProductService;
