import Layout from "../Pages/Layout";

import Wishlist from "../Pages/Wishlist";

import Home from "../Pages/Home";

export const routes = [
  {
    path: "/",
    element: <Home />,
    children: [],
  },
  {
    path: "wishlist",
    element: <Wishlist />,
  },
];
