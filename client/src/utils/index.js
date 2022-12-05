import { useTheme } from "styled-components";
import jwt_decode from "jwt-decode";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// get localstorage values
export const getLocalstorage = (name) => {
  const items = localStorage.getItem(name)
    ? JSON.parse(localStorage.getItem(name))
    : [];

  return items;
};

/**
 *
 * @param {string} name
 * @param {object} items
 */
export const setLocalstorage = (name, items) => {
  localStorage.setItem(name, JSON.stringify(items));
};

/**
 *
 * @param {string} name
 */
export const removeLocalstorage = (name) => {
  localStorage.removeItem(name);
};

/**
 * Find Index of specified item in the localStorage
 * @param {Object} items
 * @param {Object} obj
 * @returns
 */
export const indexOfCart = (items, obj) => {
  const carts = items.findIndex(
    (item) => item._id === obj._id && item.size === obj.size
  );

  return carts;
};

// Remove specific item from collection
export const removeCart = (items, obj) => {
  const removeItems = items.filter((item) => {
    return item.size !== obj.size && obj._id !== item._id;
  });

  return removeItems;
};

export const useColor = () => {
  const theme = useTheme();

  return theme.colors;
};

export const objToArray = (obj) => {
  return new Array(obj);
};

//<=== Helper functions ====>
export const mapValuesToState = (values, shouldClear = false) => {
  return Object.keys(values).reduce((acc, cur) => {
    acc[cur] = {
      value: shouldClear ? "" : values[cur],
      error: "",
      focused: false,
      touched: false,
    };
    return acc;
  }, {});
};

export const mapStateToKeys = (state, key) => {
  return Object.keys(state).reduce((acc, cur) => {
    acc[cur] = state[cur][key];
    return acc;
  }, {});
};

export const deepClone = (state) => {
  return JSON.parse(JSON.stringify(state));
};
export const isEmptyObject = (values) => {
  return Object.keys(values).length === 0;
};

export const jwtDecoder = (token) => {
  if (!token) {
    throw new Error("Invalid token: " + token);
  }

  return jwt_decode(token);
};

export const makeUserObj = ({ displayName, email, photoURL }) => {
  let val = Math.floor(1000 + Math.random() * 9000);

  return {
    username: displayName.toLowerCase().split(" ").join("") + "" + val,
    email: email,
    avatar: photoURL,
  };
};

export const ObjectId = (
  m = Math,
  d = Date,
  h = 16,
  s = (s) => m.floor(s).toString(h)
) => s(d.now() / 1000) + " ".repeat(h).replace(/./g, () => s(m.random() * h));

/**
 *
 * @param {*} price
 * @param {*} salePrice
 * @returns {} discount
 */
export const percentageOfNumber = (price, salePrice, discount) => {
  if (price > 0) {
    const amount = (discount / 100) * price;
    return amount;
  }

  if (salePrice > 0) {
    const amount = (discount / 100) * salePrice;
    return amount;
  }

  return 0;
};

/**
 *
 * @param {*} value
 * @param {number} length
 * @param {number} start
 * @param {number} end
 * @returns
 */
export const shortText = (value, length, start, end) => {
  if (value.trim().length > length) {
    const text = value.slice(start, end);
    return text + "...";
  } else {
    return value;
  }
};

export const isEmptyArray = (arr) => {
  return arr.length === 0;
};

export const randomId = () => {
  return Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, "")
    .substr(2, 10);
};

export const arrayToObject = (arr) => {
  var mapped = arr.map((item) => ({ [item.key]: item.value }));

  var newObj = Object.assign({}, ...mapped);
  return newObj;
};

export const getSalePrice = ({ price, discount = 0 }) => {
  const amount = (discount / 100) * price;

  return price - amount;
};

export const findIndex = (arrOfObj, target) => {
  return arrOfObj.findIndex((item) => item.cart._id.toString() === target);
};

/**
 *
 * @param {String} url
 * @returns promise
 */

export const requestToServerWithGet = ({ url }) => {
  const callApi = async () => {
    try {
      const response = await axios.get(
        url,

        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + getLocalstorage("user_info"),
          },
        }
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      return await error.response.data.errors;
    }
  };

  return callApi;
};

export const requestToServerWithPost = ({ url }) => {
  const callApi = async (values) => {
    try {
      const response = await axios.post(
        url,
        values,

        {
          method: "POST",
          headers: {
            Authorization: "Bearer " + getLocalstorage("user_info"),
          },
        }
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      return await error.response.data.errors;
    }
  };

  return callApi;
};

export const requestTServer = async ({ product_id }) => {
  let response = await axios.get(
    `http://localhost:5000/vendor/getvariations/${product_id}`,

    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + getLocalstorage("user_info"),
      },
    }
  );

  return response;
};

export const getTotalPrice = ({ carts }) => {
  const prices = carts?.reduce((prev, cur) => {
    const price = cur.qty * cur.price;

    return prev + price;
  }, 0);

  return prices;
};
