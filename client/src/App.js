import { useRoutes } from "react-router-dom";

import "./App.css";

import { routes } from "./Routes";

import Theme from "./Theme";

function App() {
  return <Theme>{useRoutes(routes)}</Theme>;
}

export default App;
