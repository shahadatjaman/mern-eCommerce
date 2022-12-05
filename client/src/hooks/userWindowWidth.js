import { useEffect } from "react";
import { useState } from "react";

export const useWindowWidth = ({ width }) => {
  const [isMatched, setIsMatched] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (width > window.innerWidth) {
        setIsMatched(true);
      } else {
        setIsMatched(false);
      }
    });

    if (width > window.innerWidth) {
      setIsMatched(true);
    } else {
      setIsMatched(false);
    }
  }, [width]);

  return isMatched;
};
