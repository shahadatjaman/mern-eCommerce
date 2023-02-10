import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import JWTDecoder from "../utils/JwtDecoder";
import Storage from "../utils/Storage";
import { Loading } from "../Components/Shared/Loading/index";
const storage = new Storage();
let token = storage.getData(process.env.REACT_APP_ACCESS_TOKEN_KEY);

const jwtDecoder = new JWTDecoder(
  process.env.REACT_APP_ACCESS_TOKEN_SECRET_KEY
);

export const VendorProtector = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (user && user.role.includes("vendor")) {
    return children;
  } else {
    return <Navigate to={"/"} />;
  }
};

export const UserProtector = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (user && user?.role.includes("user")) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};

export const AuthProtector = ({ children, role }) => {
  const { user } = useSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (user) {
    return <Navigate to={"/"} />;
  } else {
    return children;
  }
};
