import { useState } from "react";

export const useIsExist = ({ values }) => {
  const [isAdded, setIsAdded] = useState(false);

  if (typeof values !== "object") {
    throw new Error("values must be a array or object");
  }

  const isExist = (name) => {
    if (values.length > 0) {
      values.find((val) => {
        if (val.variation_type === "Color") {
          setIsAdded(true);
        }
        if (name === "Size") {
          setIsAdded(false);
        }

        return val;
      });
    }
  };

  return {
    isAdded,
    isExist,
  };
};
