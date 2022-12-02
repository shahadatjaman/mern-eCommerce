import { useRoutes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ThemeProvider } from "@mui/material";
import { getLocalstorage } from "./utils";
import jwt_docode from "jwt-decode";
import "./App.css";

import { routes } from "./Routes";

import Theme from "./Theme";

import { addUser } from "./feature/reducer/user/";
import { useEffect } from "react";

import theme from "./Theme/muiTheme";

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
      <ThemeProvider theme={theme}>{useRoutes(routes)}</ThemeProvider>
    </Theme>
  );
}

export default App;
