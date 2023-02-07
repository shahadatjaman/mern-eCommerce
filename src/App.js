import { Suspense, useEffect } from "react";
import { useRoutes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ThemeProvider } from "@mui/material";
import { getLocalstorage } from "./utils";
import "./App.css";

import { routes } from "./Routes";

import Theme from "./Theme";

import { addUser } from "./feature/reducer/user/auth";

import theme from "./Theme/muiTheme";

import { Loading } from "./Components/Shared/Loading/";
import JWTDecoder from "./utils/JwtDecoder";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = getLocalstorage("accessToken");
    const jwtDecoder = new JWTDecoder(
      process.env.REACT_APP_ACCESS_TOKEN_SECRET_KEY
    );

    if (jwtDecoder.isValid(token)) {
      dispatch(addUser(jwtDecoder.decode(token)));
    } else {
      dispatch(addUser(null));
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
