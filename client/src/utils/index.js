import { useState } from "react";
import { useTheme } from "styled-components";
import jwt_decode from "jwt-decode";
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
