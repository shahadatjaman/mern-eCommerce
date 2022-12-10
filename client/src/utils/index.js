import { useTheme } from "styled-components";
import jwt_decode from "jwt-decode";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useEffect } from "react";

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

      return await response.data;
    } catch (error) {
      return await error.response.data;
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

export const getRecentVariation = (variations, recentColor) => {
  if (recentColor) {
    const newVariation = variations.find(
      (val) => val._id === recentColor.product_variations_id
    );

    return newVariation;
  }
};

// Check rating
export const checkRating = (values, user_id) => {
  if (!values && typeof values !== "object") {
    throw new Error("values must be array of object!");
  }
  if (!user_id && typeof values !== "string") {
    throw new Error("values must be string or id!");
  }

  const filtered = values.findIndex((val) => val.user_id === user_id);

  return filtered > -1;
};

export const getTotalRating = (values) => {
  if (values) {
    return values?.reduce(
      (prev, cur) => parseInt(prev) + parseInt(cur.rating),
      0
    );
  } else {
    return 1;
  }
};

export const checkVarintColor = (options, name) => {
  const indexOfType = options.findIndex((val) => val.variation_type === name);

  return indexOfType > -1;
};

export const callApi = async ({ _id, pathOne, pathTwo, method, values }) => {
  const token = getLocalstorage("user_info");
  try {
    let response = await axios[method](
      `${process.env.REACT_APP_SERVER_URL}/${pathOne}/${pathTwo}/${
        _id ? _id : ""
      }`,
      (() => {
        if (method === "post") {
          return values;
        } else {
          return {
            headers: {
              Authorization: "Bearer " + token,
            },
          };
        }
      })(),
      (() => {
        if (method === "post") {
          return {
            headers: {
              Authorization: "Bearer " + token,
            },
          };
        }
      })()
    );

    return await response.data;
  } catch (error) {
    return await error.response.data.errors;
  }
};

export const timeCounter = (start) => {
  var start = new Date();
  start.setHours(23, 0, 0); // 11pm

  function pad(num) {
    return ("0" + parseInt(num)).substr(-2);
  }

  return function tick() {
    var now = new Date();
    if (now > start) {
      // too late, go to tomorrow
      start.setDate(start.getDate() + 1);
    }
    var remain = (start - now) / 1000;
    var hh = pad((remain / 60 / 60) % 60);
    var mm = pad((remain / 60) % 60);
    var ss = pad(remain % 60);

    setTimeout(tick, 1000);
    return { hh, mm, ss };
  };
};
