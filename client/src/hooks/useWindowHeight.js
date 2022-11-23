import { useState, useEffect } from "react";

export const useWindowHeight = ({ height }) => {
  const [isMatched, setIsMatched] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (height < window.scrollY) {
        setIsMatched(true);
      } else {
        setIsMatched(false);
      }
    });

    if (height < window.scrollY) {
      setIsMatched(true);
    } else {
      setIsMatched(false);
    }
  }, [height]);

  return isMatched;
};
