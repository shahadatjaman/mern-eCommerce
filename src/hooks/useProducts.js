import { Call } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { callApi } from "../utils";

import fetchData from "../utils/products/fetchData";

const INIT = { products: null, category: null, sliderProducts: null };

const useProducts = () => {
  const [state, setState] = useState(INIT);
  const [loading, setLoading] = useState(false);
  const [loadingCate, setLoadingCate] = useState(false);
  const [loadingSlider, setLoadingSlider] = useState(false);

  // Get products
  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        let result = await callApi({
          pathOne: "v3",
          pathTwo: "get_products",
          method: "get",
          from: 0,
          to: 15,
        });

        if (result?.products) {
          setState((prev) => {
            return { ...prev, products: result?.products };
          });
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // Get categories
  useEffect(() => {
    setLoadingCate(true);
    const cate__ = localStorage.getItem("cate__");
    if (!cate__) {
      getCategories();
    } else {
      setState((prev) => {
        return { ...prev, category: JSON.parse(cate__) };
      });
      setLoadingCate(false);
    }
  }, []);

  const getCategories = async () => {
    setLoadingCate(true);
    try {
      let result = await callApi({
        pathOne: "v1",
        pathTwo: "getcategories",
        method: "get",
      });
      localStorage.setItem("cate__", JSON.stringify(result.category));
      setState((prev) => {
        return { ...prev, category: result.category };
      });
    } catch (err) {
      console.log(err);
    } finally {
      setLoadingCate(false);
    }
  };

  // get slider products
  useEffect(() => {
    sliderProducts();
  }, []);

  const sliderProducts = async () => {
    setLoadingSlider(true);
    try {
      let result = await callApi({
        pathOne: "v1",
        pathTwo: "get_products",
        method: "get",
        values: { category_id: "63ab3dc7ba6e5a0fde1ec5f3" },
        from: 0,
        to: 4,
      });

      setState((prev) => {
        return { ...prev, sliderProducts: result.products };
      });
    } catch (err) {
      console.log(err);
    } finally {
      setLoadingSlider(false);
    }
  };

  return {
    loading,
    loadingCate,
    products: state.products,
    category: state.category,
    sliderProducts: state.sliderProducts,
    loadingSlider: loadingSlider,
  };
};

export default useProducts;
