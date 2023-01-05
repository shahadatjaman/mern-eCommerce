import { useState } from "react";

export const useSelect = () => {
  const [state, setState] = useState(null);
  const selecteHandleChange = (e) => {
    if (e.target.value) {
      setState(e.target.value);
    }
  };
  return {
    state,
    selecteHandleChange,
  };
};
