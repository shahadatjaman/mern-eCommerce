import { useRoutes } from "react-router-dom";

import "./App.css";

import { routes } from "./Routes";

function App() {
  return useRoutes(routes);
}

export default App;
