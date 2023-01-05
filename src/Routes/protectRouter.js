import { Navigate } from "react-router-dom";

export const Private = ({ children }) => {
  let user = localStorage.getItem("accessToken");

  return user ? children : <Navigate to={"/login"} />;
};

export const Public = ({ children }) => {
  let user = localStorage.getItem("accessToken");

  return user ? <Navigate to={"/"} /> : children;
};
