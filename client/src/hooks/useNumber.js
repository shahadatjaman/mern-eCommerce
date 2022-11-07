import { useEffect, useState } from "react";

const useNumber = (value = 0) => {
  const [state, setState] = useState(value);

  useEffect(() => {
    setState(value * 1);
  }, [value]);

  return state;
};

export default useNumber;
