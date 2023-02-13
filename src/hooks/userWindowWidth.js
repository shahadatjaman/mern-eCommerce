import { useEffect } from "react";
import { useState } from "react";

export const useWindowWidth = ({ width }) => {
  const [isMatched, setIsMatched] = useState(true);

  useEffect(() => {
    window.addEventListener("resize", () => {
      console.log("Window width", window.innerWidth);
      console.log("Targeted  width", width);
      if (width > window.innerWidth) {
        setIsMatched(true);
      }
      if (window.innerWidth < 328) {
        setIsMatched(true);
      }
      if (width < window.innerWidth) {
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
