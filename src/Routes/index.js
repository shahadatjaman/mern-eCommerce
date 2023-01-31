import { lazy } from "react";
import CreateNewPassword from "../Pages/auth/NewPassword/index.js";
import ForgetPassword from "../Pages/auth/ForgetPassword";
import SendCode from "../Pages/auth/SendCode";
import Categories from "../Pages/Category";
import Invoice from "../Pages/Checkout/Invoice";
import Search from "../Pages/SearchUi";

import { Private, Public } from "./protectRouter";
import Collection from "../Vendor/Pages/Collection/index.js";
import CreateProduct from "../Vendor/Pages/CreateProdcut/index.js";
import Sidebar from "../Vendor/Components/Sidebar/Sidebar.js";
import UpdateProduct from "../Vendor/Pages/UpdateProduct/index.js";
import Dashboad from "../Vendor/Pages/Home/index.js";
import Orders from "../Vendor/Pages/MyOders/";
import Productions from "../Vendor/Pages/Production/index.js";

const Wishlist = lazy(() => import("../Pages/Wishlist"));

const Details = lazy(() => import("../Pages/ProductDetails"));

const Cart = lazy(() => import("../Pages/Shopping/"));

const Login = lazy(() => import("../Pages/auth/Login"));

const Auth = lazy(() => import("../Pages/auth"));

const Register = lazy(() => import("../Pages/auth/Register"));

const Billing = lazy(() => import("../Pages/Checkout/Billing"));

const Checkout = lazy(() => import("../Pages/Checkout"));

const Order = lazy(() => import("../Pages/Checkout/Order"));

// import Layout from "../Pages/Layout";

const OrderSuccess = lazy(() => import("../Pages/OrderSuccess"));

const Profile = lazy(() => import("../Pages/Profile"));

const ManageAccount = lazy(() => import("../Components/Profile/ManageAccount"));

const MyOrders = lazy(() => import("../Components/Profile/MyOrder"));

const Home = lazy(() => import("../Pages/Home"));

export const routes = [
  {
    path: "/",
    element: <Home />,
    children: [],
  },
  {
    path: "invoice",
    element: (
      <Private>
        <Invoice />
      </Private>
    ),
  },
  //   const [searchParams] = useSearchParams();
  // const code = searchParams.get('code'); // "testCode"
  {
    path: "query/",
    element: <Search />,
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
    element: (
      <Private>
        <Wishlist />
      </Private>
    ),
  },
  {
    path: "product/:id",
    element: <Details />,
  },
  {
    path: "categories/:category_id",
    element: <Categories />,
  },
  {
    path: "cartitems",
    element: <Cart />,
  },
  {
    path: "identify/forget_password",
    element: <ForgetPassword />,
  },
  {
    path: "indentify/recovery_account/:email",
    element: <SendCode />,
  },
  {
    path: "create_new_password",
    element: (
      <Private>
        <CreateNewPassword />
      </Private>
    ),
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
  // Vendor routes
  {
    path: "/dashboard",
    element: (
      <Private>
        <Sidebar />
      </Private>
    ),
    children: [
      {
        path: "",
        element: (
          <Private>
            <Dashboad />
          </Private>
        ),
      },
      {
        path: "newproduct",
        element: (
          <Private>
            <CreateProduct />
          </Private>
        ),
      },
      {
        path: "collections",
        element: (
          <Private>
            <Collection />
          </Private>
        ),
      },
      {
        path: "customer_order",
        element: (
          <Private>
            {/* <Orders /> */}
            <Productions />
          </Private>
        ),
      },
      {
        path: "categories",
        element: (
          <Private>
            {/* <Orders /> */}
            <Productions />
          </Private>
        ),
      },
      {
        path: "analytics",
        element: (
          <Private>
            {/* <Orders /> */}
            <Productions />
          </Private>
        ),
      },
      {
        path: "setting",
        element: (
          <Private>
            {/* <Orders /> */}
            <Productions />
          </Private>
        ),
      },
      {
        path: "update_product/:product_id",
        element: (
          <Private>
            <UpdateProduct />
          </Private>
        ),
      },
    ],
  },
];
