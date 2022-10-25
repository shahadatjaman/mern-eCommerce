import { Navigate } from "react-router-dom";

export const Private = ({ children }) => {
  let user = localStorage.getItem("user_info");

  return user ? children : <Navigate to={"/"} />;
};

export const Public = ({ children }) => {
  let user = localStorage.getItem("user_info");

  return user ? <Navigate to={"/"} /> : children;
};
