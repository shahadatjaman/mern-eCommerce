import { useEffect, useState } from "react";

export const useTimeFormat = (time) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    if (time) {
      const formated = new Date(time).toLocaleDateString("en-us", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });

      setState(formated);
    }
  }, [time]);

  return state;
};
