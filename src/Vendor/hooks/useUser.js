import { useEffect, useState } from "react";

import { getLocalstorage } from "../utils";
import jwt from "jwt-decode";
export const useUser = () => {
  const [state, setState] = useState(null);

  useEffect(() => {
    const token = getLocalstorage("accessToken");
    if (token.length !== 0) {
      const user = jwt(token);
      setState(user);
    }
  }, [state]);

  return state;
};
