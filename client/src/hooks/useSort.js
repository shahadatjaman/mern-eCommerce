import { useEffect } from "react";
import { useState } from "react";
import { deepClone } from "../utils";

export const useSort = (values) => {
  const [state, setState] = useState([]);

  useEffect(() => {
    if (values && values.length > 0) {
      const cloned = deepClone(values);

      const sorted = cloned.sort((first, second) => {
        return (
          new Date(second.createdAt).getTime() -
          new Date(first.createdAt).getTime()
        );
      });
      setState(sorted);
    }
  }, [values]);

  return state;
};
