import StorefrontIcon from "@mui/icons-material/Storefront";
import Person2Icon from "@mui/icons-material/Person2";
import GradingIcon from "@mui/icons-material/Grading";

export const menuItems = [
  {
    name: "My Vendor",
    Icon: <StorefrontIcon fontSize="small" />,
    role: "vendor",
  },
  {
    name: "My Account",
    Icon: <Person2Icon fontSize="small" />,
    role: "user",
  },
  {
    name: "My Order",
    Icon: <GradingIcon fontSize="small" />,
  },
  {
    name: "Cart",
    Icon: <StorefrontIcon fontSize="small" />,
    role: "vendor",
  },
  {
    name: "Wish",
    path: "/dashboard",
    Icon: <StorefrontIcon fontSize="small" />,
    role: "vendor",
  },
];
