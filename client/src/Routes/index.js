import Wishlist from "../Pages/Wishlist";

import Home from "../Pages/Home";

import Details from "../Pages/ProductDetails";
import Cart from "../Pages/Shopping/";
import Login from "../Pages/auth/Login";
import Auth from "../Pages/auth";
import Register from "../Pages/auth/Register";

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
  {
    path: "product/:id",
    element: <Details />,
  },
  {
    path: "cartitems",
    element: <Cart />,
  },
  {
    path: "",
    element: <Auth />,
    children: [
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
];
