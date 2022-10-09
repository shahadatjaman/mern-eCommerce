import { useState } from "react";
import { useTheme } from "styled-components";

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
