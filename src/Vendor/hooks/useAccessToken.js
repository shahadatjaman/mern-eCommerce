import { useEffect } from "react";
import jwt from "jwt-decode";
import { useDispatch } from "react-redux";
import { getNewAccessToken } from "../feature/reducer/user";

export const useAccessToken = () => {
  const dispatch = useDispatch();
  // Get new refresh token
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      var decodedToken = jwt(token, { complete: true });
      var dateNow = new Date();
      if (decodedToken.exp < dateNow.getTime()) {
        dispatch(
          getNewAccessToken({
            pathOne: "auth",
            pathTwo: "refreshtoken",
            method: "get",
          })
        );
      }
    }
  }, [dispatch]);
};
