import { Suspense, useEffect } from "react";
import { useRoutes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ThemeProvider } from "@mui/material";
import { getLocalstorage } from "./utils";
import jwt from "jwt-decode";
import "./App.css";

import { routes } from "./Routes";

import Theme from "./Theme";

import { addUser, getNewAccessToken } from "./feature/reducer/user/auth";

import theme from "./Theme/muiTheme";

import { Loading } from "./Components/Shared/Loading/";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = getLocalstorage("accessToken");
    if (token.length !== 0) {
      const user = jwt(token);

      dispatch(addUser(user));
    }
  });

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

  return (
    <Theme>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<Loading />}>{useRoutes(routes)}</Suspense>
      </ThemeProvider>
    </Theme>
  );
}

export default App;
