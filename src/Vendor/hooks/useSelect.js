import { useState } from "react";

export const useSelect = () => {
  const [state, setState] = useState("");
  const selecteHandleChange = (e) => {
    if (e.target.value) {
      setState(e.target.value);
    }
  };

  const clear = () => {
    setState("");
  };

  return {
    state,
    selecteHandleChange,
    clear,
  };
};
