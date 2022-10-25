import { useState } from "react";
import { deepClone } from "../utils";

export const useCreateElement = () => {
  const [state, setState] = useState(1);
  const [array, setArry] = useState([]);

  let addElement = () => {
    setState((prev) => prev + 1);

    setArry((prev) => [...prev, state]);
  };

  let removeElement = () => {
    let index = array.indexOf(2);
    console.log(deepClone(array));
    if (index > -1) {
      console.log(array);
    }
  };

  return { array, addElement, removeElement };
};
