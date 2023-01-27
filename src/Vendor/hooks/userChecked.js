import { useState } from "react";
import { deepClone } from "../utils";

export const useChecked = () => {
  const [state, setState] = useState([]);

  const addToMark = (product_id) => {
    // Check this product id if already exist ,then remove this id otherwase add

    const oldState = deepClone(state);
    const findIndex = oldState.findIndex((val) => val === product_id);

    if (findIndex === -1) {
      setState(() => {
        return [...state, product_id];
      });
    } else {
      const filtered = oldState.filter((val) => val !== product_id);

      setState(filtered);
    }
  };

  const isAdded = (product_id) => {
    const oldState = deepClone(state);

    const getIndex = oldState.findIndex((val) => val === product_id);
    if (getIndex === -1) {
      return false;
    } else {
      return true;
    }
  };

  const selectAll = (values) => {
    let result = values.map(({ _id }) => _id);

    return result;
  };

  const getStates = (values) => {
    if (values) {
      setState(values);
    }
  };

  return {
    addToMark,
    state,
    isAdded,
    getStates,
    selectAll,
  };
};
