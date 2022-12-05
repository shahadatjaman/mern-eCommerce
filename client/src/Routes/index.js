import Wishlist from "../Pages/Wishlist";

import Home from "../Pages/Home";

import Details from "../Pages/ProductDetails";
import Cart from "../Pages/Shopping/";
import Login from "../Pages/auth/Login";
import Auth from "../Pages/auth";
import Register from "../Pages/auth/Register";
import Billing from "../Pages/Checkout/Billing";
import Checkout from "../Pages/Checkout";
import Order from "../Pages/Checkout/Order";
import { Private, Public } from "./protectRouter";
import Layout from "../Pages/Layout";
import OrderSuccess from "../Pages/OrderSuccess";
import Profile from "../Pages/Profile";

import ManageAccount from "../Components/Profile/ManageAccount";

import MyOrders from "../Components/Profile/MyOrder";

export const routes = [
  {
    path: "/",
    element: <Home />,
    children: [],
  },
  {
    path: "order_success/:order_id",
    element: (
      <Private>
        <OrderSuccess />
      </Private>
    ),
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
    element: (
      <Private>
        <Checkout />
      </Private>
    ),
    children: [
      {
        path: "billing",
        element: (
          <Private>
            <Billing />
          </Private>
        ),
      },
      {
        path: "order",
        element: (
          <Private>
            <Order />
          </Private>
        ),
      },
    ],
  },
  {
    path: "",
    element: <Auth />,
    children: [
      {
        path: "register",
        element: (
          <Public>
            <Register />
          </Public>
        ),
      },
      {
        path: "login",
        element: (
          <Public>
            <Login />
          </Public>
        ),
      },
    ],
  },
  {
    path: "profile/:username",
    element: (
      <Private>
        <Profile />
      </Private>
    ),
    children: [
      {
        path: "manageaccount",
        element: (
          <Private>
            <ManageAccount />
          </Private>
        ),
      },
      {
        path: "myorders",
        element: (
          <Private>
            <MyOrders />
          </Private>
        ),
      },
    ],
  },
];
