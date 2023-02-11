import { Suspense, useEffect } from "react";
import { useRoutes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ThemeProvider } from "@mui/material";
import { getLocalstorage } from "./utils";
import "./App.css";

import { routes } from "./Routes";

import Theme from "./Theme";

import { addUser, getNewAccessToken } from "./feature/reducer/user/auth";

import theme from "./Theme/muiTheme";
import "react-toastify/dist/ReactToastify.css";
import { Loading } from "./Components/Shared/Loading/";
import JWTDecoder from "./utils/JwtDecoder";
import ScrollToTop from "./Components/Shared/ScrollTop";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = getLocalstorage("accessToken");
    const jwtDecoder = new JWTDecoder(process.env.REACT_APP_ACCESS_TOKEN_KEY);

    const isValidJwt = jwtDecoder.checkTokenExpiry(token);

    if (isValidJwt) {
      dispatch(addUser(jwtDecoder.decode(token)));
    } else {
      dispatch(getNewAccessToken());
    }
  }, [dispatch]);

  return (
    <Theme>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<Loading />}>{useRoutes(routes)}</Suspense>
        <ScrollToTop />
      </ThemeProvider>
    </Theme>
  );
}

export default App;
