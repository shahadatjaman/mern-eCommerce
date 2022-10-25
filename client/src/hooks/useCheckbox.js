import { useState } from "react";

export const useCheckbox = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleChange = (e) => {
    if (isChecked) {
      setIsChecked(false);
    } else {
      setIsChecked(true);
    }
  };

  return {
    handleChange,
    isChecked,
  };
};
