import { lazy } from "react";
import CreateNewPassword from "../Pages/auth/NewPassword/index.js";
import ForgetPassword from "../Pages/auth/ForgetPassword";
import SendCode from "../Pages/auth/SendCode";
import Categories from "../Pages/Category";
import Invoice from "../Pages/Checkout/Invoice";
import Search from "../Pages/SearchUi";

import { AuthProtector, UserProtector, VendorProtector } from "./protectRouter";
import Collection from "../Vendor/Pages/Collection/index.js";
import CreateProduct from "../Vendor/Pages/CreateProdcut/index.js";
import Sidebar from "../Vendor/Components/Sidebar/Sidebar.js";
import UpdateProduct from "../Vendor/Pages/UpdateProduct/index.js";
import Dashboad from "../Vendor/Pages/Home/index.js";
import Orders from "../Vendor/Pages/MyOders/";
import Productions from "../Vendor/Pages/Production/index.js";
import Register from "../Pages/auth/Register";
import Login from "../Pages/auth/Login";
const Wishlist = lazy(() => import("../Pages/Wishlist"));

const Details = lazy(() => import("../Pages/ProductDetails"));

const Cart = lazy(() => import("../Pages/Shopping/"));

// const Login = lazy(() => import("../Pages/auth/Login"));

const Auth = lazy(() => import("../Pages/auth"));

// const Register = lazy(() => import("../Pages/auth/Register"));

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
      <UserProtector>
        <Invoice />
      </UserProtector>
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
      <UserProtector>
        <OrderSuccess />
      </UserProtector>
    ),
  },
  {
    path: "wishlist",
    element: (
      <UserProtector>
        <Wishlist />
      </UserProtector>
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
      <UserProtector>
        <CreateNewPassword />
      </UserProtector>
    ),
  },
  {
    path: "",
    element: (
      <UserProtector>
        <Checkout />
      </UserProtector>
    ),
    children: [
      {
        path: "billing",
        element: (
          <UserProtector>
            <Billing />
          </UserProtector>
        ),
      },
      {
        path: "order",
        element: (
          <UserProtector>
            <Order />
          </UserProtector>
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
          <AuthProtector>
            <Register />
          </AuthProtector>
        ),
      },
      {
        path: "login",
        element: (
          <AuthProtector>
            <Login />
          </AuthProtector>
        ),
      },
    ],
  },
  {
    path: "profile/:username",
    element: (
      <UserProtector>
        <Profile />
      </UserProtector>
    ),
    children: [
      {
        path: "manageaccount",
        element: (
          <UserProtector>
            <ManageAccount />
          </UserProtector>
        ),
      },
      {
        path: "myorders",
        element: (
          <UserProtector>
            <MyOrders />
          </UserProtector>
        ),
      },
    ],
  },
  // Vendor routes
  {
    path: "/dashboard",
    element: (
      <VendorProtector>
        <Sidebar />
      </VendorProtector>
    ),
    children: [
      {
        path: "",
        element: (
          <VendorProtector>
            <Dashboad />
          </VendorProtector>
        ),
      },
      {
        path: "newproduct",
        element: (
          <VendorProtector>
            <CreateProduct />
          </VendorProtector>
        ),
      },
      {
        path: "collections",
        element: (
          <VendorProtector>
            <Collection />
          </VendorProtector>
        ),
      },
      {
        path: "customer_order",
        element: (
          <VendorProtector>
            {/* <Orders /> */}
            <Productions />
          </VendorProtector>
        ),
      },
      {
        path: "categories",
        element: (
          <VendorProtector>
            {/* <Orders /> */}
            <Productions />
          </VendorProtector>
        ),
      },
      {
        path: "analytics",
        element: (
          <VendorProtector>
            {/* <Orders /> */}
            <Productions />
          </VendorProtector>
        ),
      },
      {
        path: "setting",
        element: (
          <VendorProtector>
            {/* <Orders /> */}
            <Productions />
          </VendorProtector>
        ),
      },
      {
        path: "update_product/:product_id",
        element: (
          <VendorProtector>
            <UpdateProduct />
          </VendorProtector>
        ),
      },
    ],
  },
];
