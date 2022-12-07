import { Suspense, useEffect } from "react";
import { useRoutes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ThemeProvider } from "@mui/material";
import { getLocalstorage } from "./utils";
import jwt_docode from "jwt-decode";
import "./App.css";

import { routes } from "./Routes";

import Theme from "./Theme";

import { addUser } from "./feature/reducer/user/";

import theme from "./Theme/muiTheme";

import { Loading } from "./Components/Shared/Loading/";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = getLocalstorage("user_info");
    if (token.length !== 0) {
      const user = jwt_docode(token);

      dispatch(addUser(user));
    }
  });
  return (
    <Theme>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<Loading />}>{useRoutes(routes)}</Suspense>
      </ThemeProvider>
    </Theme>
  );
}

export default App;
