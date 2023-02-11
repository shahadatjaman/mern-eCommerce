import { useEffect } from "react";
import { useState } from "react";

export const useIsExist = ({ values }) => {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    if (Array.isArray(values)) {
      let result = [...values]?.filter((val) => val.variation_type === "Color");
      setColors(result);
    }
  }, [values]);
  const addColor = (options) => {
    if (Array.isArray(options)) {
      let result = [...options]?.filter(
        (val) => val.variation_type === "Color"
      );
      setColors(result);
    }
  };
  const removeHandler = (id) => {
    const removed = colors.filter((val) => val._id !== id);
    console.log(removed);
    console.log(id);
  };

  return { colors, addColor, removeHandler };
};
