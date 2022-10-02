import Layout from "../Pages/Layout";

import Wishlist from "../Pages/Wishlist";

import Home from "../Pages/Home";

import Details from "../Pages/ProductDetails";
import Cart from "../Pages/Cart";

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
];
