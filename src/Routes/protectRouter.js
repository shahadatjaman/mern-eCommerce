import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import JWTDecoder from "../utils/JwtDecoder";
import Storage from "../utils/Storage";

const storage = new Storage();
let token = storage.getData(process.env.REACT_APP_ACCESS_TOKEN_KEY);

const jwtDecoder = new JWTDecoder(
  process.env.REACT_APP_ACCESS_TOKEN_SECRET_KEY
);

export const VendorProtector = ({ children }) => {
  const isValid = jwtDecoder.isValid(token);
  const user = jwtDecoder.decode(token);
  if (isValid && user.role.includes("vendor")) {
    return children;
  } else {
    return <Navigate to={"/"} />;
  }
};

export const UserProtector = ({ children }) => {
  const isValid = jwtDecoder.isValid(token);
  const user = jwtDecoder.decode(token);
  if (isValid && user?.role.includes("user")) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};

export const AuthProtector = ({ children, role }) => {
  const { user } = useSelector((state) => state.auth);

  if (jwtDecoder.isValid(token) && user) {
    return <Navigate to={"/"} />;
  } else {
    return children;
  }
};
